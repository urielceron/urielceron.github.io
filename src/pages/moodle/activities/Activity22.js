import React, { useState } from 'react';
import { ArrowLeft, Award, CheckCircle2, Users, Clock, Target, Shield, RefreshCw, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity22 = ({ darkMode }) => {
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
              <span className="font-medium">45 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Parejas</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Award className="h-8 w-8 text-purple-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 22: EXAMEN MAESTRO CON TIPOS VARIADOS
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DÍA 2 - Sesión Presencial • Bloque 3: Producción Masiva
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
          Crear un examen completo que combine todos los tipos de preguntas explorados, aplicando
          estrategias anticopia y validando la experiencia estudiantil integral.
        </p>
      </div>

      {/* Estructura del Examen Maestro */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📊 Estructura del "Examen Maestro" (15 preguntas)
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              🏗️ Distribución por Tipos
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              <div>• <strong>5 Opción múltiple</strong> (base sólida, fácil evaluar)</div>
              <div>• <strong>2 Calculadas/Numéricas</strong> (según materia)</div>
              <div>• <strong>2 Verdadero/Falso</strong> (rápidas, conceptuales)</div>
              <div>• <strong>2 Respuesta corta</strong> (evita adivinanza)</div>
              <div>• <strong>2 Relacionar columnas</strong> (conceptos-definiciones)</div>
              <div>• <strong>1 Ensayo corto</strong> (pensamiento crítico)</div>
              <div>• <strong>1 Tipo avanzado</strong> (orden, arrastrar, etc.)</div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              🎯 Orden Estratégico Pedagógico
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
              <div>• <strong>1-3:</strong> Opción múltiple fáciles (confianza inicial)</div>
              <div>• <strong>4-5:</strong> Verdadero/falso (mantener ritmo)</div>
              <div>• <strong>6-9:</strong> Calculadas/numéricas (concentración media)</div>
              <div>• <strong>10-11:</strong> Respuesta corta (aplicación)</div>
              <div>• <strong>12-13:</strong> Relacionar (síntesis)</div>
              <div>• <strong>14:</strong> Tipo avanzado (desafío)</div>
              <div>• <strong>15:</strong> Ensayo (reflexión final)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuración Anticopia */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
          <Shield className="h-6 w-6 text-red-600" />
          Configuración Anticopia Máxima
        </h2>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/30 border-red-700' : 'bg-red-50 border-red-200'} border mb-4`}>
          <h3 className={`font-bold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
            🔐 CONFIGURACIÓN ESTÁNDAR ANTICOPIA
          </h3>
          <div className={`space-y-2 text-sm ${darkMode ? 'text-red-100' : 'text-red-700'}`}>
            <div>☐ <strong>Página nueva cada pregunta</strong></div>
            <div>☐ <strong>Orden aleatorio</strong> (preguntas y opciones)</div>
            <div>☐ <strong>Navegación secuencial</strong></div>
            <div>☐ <strong>Tiempo:</strong> 45 minutos</div>
            <div>☐ <strong>Un solo intento</strong></div>
            <div>☐ <strong>Contraseña:</strong> "MAESTRO2024"</div>
            <div>☐ <strong>Revisión:</strong> Solo "el intento"</div>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border`}>
          <h3 className={`font-bold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            ⚖️ Balance Seguridad-Usabilidad
          </h3>
          <p className={`text-sm ${darkMode ? 'text-yellow-100' : 'text-yellow-700'}`}>
            Máxima anticopia sin frustrar estudiantes honestos. La configuración permite detectar
            patrones anómalos mientras mantiene una experiencia de evaluación justa.
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
                Paso 1: Planificar estructura del "Examen Maestro"
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Diseña examen de 15 preguntas</strong> con distribución estratégica mostrada arriba</p>
                <p>• <strong>Balance tipos:</strong> 5 básicas + 6 intermedias + 4 avanzadas</p>
                <p>• <strong>Tiempo estimado:</strong> 3 minutos promedio por pregunta</p>
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
                Paso 2: Compilar preguntas de actividades anteriores
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Actividad 18:</strong> 2 mejores calculadas + 3 mejores básicas</p>
                <p>• <strong>Actividad 19:</strong> 2 verdadero/falso + 2 respuesta corta + 1 ensayo</p>
                <p>• <strong>Actividad 21:</strong> 2 relacionar + 1 tipo avanzado</p>
                <p>• <strong>Créalas en Moodle</strong> (no importes, créalas una por una para control total)</p>
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
                Paso 3: Crear cuestionario con configuración anticopia máxima
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Ve a moodle.cbtis253.edu.mx</strong></p>
                <p>• <strong>Crea nuevo cuestionario:</strong> "EXAMEN MAESTRO - [Tu Materia]"</p>
                <p>• <strong>Aplica toda la configuración anticopia</strong> detallada arriba</p>
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
                Paso 4: Configurar opciones de revisión restrictivas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Durante el intento:</strong> Solo tiempo restante</p>
                <p>• <strong>Inmediatamente después:</strong> Solo "El intento"</p>
                <p>• <strong>Más tarde y después de cerrar:</strong> Solo "El intento"</p>
                <p>• <strong>NADA de:</strong> Respuestas correctas, puntuación, feedback específico</p>
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              5
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Paso 5: Agregar preguntas en orden estratégico
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Sigue el orden pedagógico:</strong> Fácil → Medio → Difícil → Reflexión</p>
                <p>• <strong>Progresión natural</strong> que mantiene motivación estudiantil</p>
                <p>• <strong>Culmina con ensayo</strong> para pensamiento crítico</p>
              </div>
            </div>
          </div>

          {/* Paso 6 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
              6
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Paso 6: Probar experiencia completa como estudiante
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Aprendiz toma examen completo</strong> usando cuenta estudiante</p>
                <p>• <strong>Mentor cronometra</strong> y observa comportamiento técnico</p>
                <p>• <strong>Evaluar:</strong> ¿45 min suficientes? ¿Progresión natural? ¿Interés mantenido?</p>
              </div>
            </div>
          </div>

          {/* Paso 7 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold">
              7
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-pink-500 bg-gray-700' : 'border-pink-500 bg-pink-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-800'}`}>
                Paso 7: Intercambio entre parejas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Cada pareja toma examen de otra pareja</strong></p>
                <p>• <strong>Retroalimentación específica:</strong> Claridad, dificultad, tiempo, problemas técnicos</p>
              </div>
            </div>
          </div>

          {/* Paso 8 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
              8
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                Paso 8: Refinar basándose en retroalimentación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Ajustar según feedback:</strong> Cambiar confusas, ajustar tiempo, simplificar complejas</p>
                <p>• <strong>Crear versión final:</strong> "EXAMEN MAESTRO v2.0"</p>
              </div>
            </div>
          </div>

          {/* Paso 9 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-semibold">
              9
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-gray-500 bg-gray-700' : 'border-gray-500 bg-gray-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                Paso 9: Documentar "receta" para futuros exámenes
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Crea template de configuración</strong> mostrado arriba</p>
                <p>• <strong>Documenta estructura de 15 preguntas</strong> para reutilizar</p>
                <p>• <strong>Guarda configuraciones</strong> para replicar en futuros exámenes</p>
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
            'Examen maestro de 15 preguntas con 7 tipos diferentes creado',
            'Configuración anticopia máxima aplicada correctamente',
            'Orden estratégico de preguntas implementado pedagógicamente',
            'Opciones de revisión configuradas para máxima seguridad',
            'Examen probado completamente desde perspectiva estudiantil',
            'Intercambio y retroalimentación con otra pareja completado',
            'Versión refinada (v2.0) creada basándose en feedback',
            'Template de configuración documentado para uso futuro'
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
            <p><strong>Experiencia integral:</strong> Este examen representa el culmen de todo lo aprendido sobre IA + Moodle</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Balance seguridad-usabilidad:</strong> Máxima anticopia sin frustrar estudiantes honestos</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Escalabilidad:</strong> El template permite crear rápidamente exámenes similares para otros temas</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Aplicación profesional:</strong> Esta metodología es aplicable directamente en contextos educativos reales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity22;
