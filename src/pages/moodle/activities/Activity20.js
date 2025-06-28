import React from 'react';
import { ArrowLeft, Shield, CheckCircle2, Users, Clock, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity20 = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              darkMode
                ? 'border-gray-600 hover:bg-gray-800 text-gray-300'
                : 'border-gray-300 hover:bg-gray-100 text-gray-700'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            Regresar al Curso
          </button>

          <div className="text-right">
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Día 2 - Actividad 20
            </div>
            <div className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Primer Examen con Estrategias Anticopia
            </div>
          </div>
        </div>

        {/* Información de la actividad */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                25 minutos
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Mentor y Aprendiz
              </span>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
            <Shield className="h-6 w-6 text-red-600" />
            🎯 Objetivo
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
            Crear un examen completo aplicando estrategias anticopia básicas disponibles en Moodle 4.5,
            antes de implementar Safe Exam Browser.
          </p>
        </div>

        {/* Estrategias Anticopia */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            🔐 Estrategias Anticopia Disponibles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/30 border-red-700' : 'bg-red-50 border-red-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                📄 Estrategias de Presentación
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
                <div>• <strong>Página nueva:</strong> Una pregunta por página</div>
                <div>• <strong>Orden aleatorio:</strong> Preguntas en orden diferente</div>
                <div>• <strong>Navegación secuencial:</strong> No regresar a pregunta anterior</div>
                <div>• <strong>Opciones aleatorias:</strong> A,B,C,D cambian de orden</div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-50 border-orange-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                ⏱️ Restricciones de Tiempo
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                <div>• <strong>Límite de tiempo:</strong> Presión temporal apropiada</div>
                <div>• <strong>Finalización automática:</strong> Se cierra solo</div>
                <div>• <strong>Un solo intento:</strong> Una oportunidad únicamente</div>
                <div>• <strong>Sin retroalimentación inmediata</strong></div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                🔒 Restricciones Extra
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                <div>• <strong>Contraseña:</strong> Acceso controlado</div>
                <div>• <strong>Restricción de red:</strong> Solo ciertas IPs</div>
                <div>• <strong>Preguntas aleatorias:</strong> Del banco de preguntas</div>
                <div>• <strong>Sin retardo entre intentos</strong></div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                👀 Opciones de Revisión Restrictivas
              </h3>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                <div>• <strong>Solo "El intento":</strong> Que se completó</div>
                <div>• <strong>NO mostrar:</strong> Respuestas correctas</div>
                <div>• <strong>NO mostrar:</strong> Puntuación detallada</div>
                <div>• <strong>NO mostrar:</strong> Feedback específico</div>
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
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  Paso 1: Crear examen básico
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• Ve a <strong>moodle.cbtis253.edu.mx</strong></p>
                  <p>• Entra a tu curso → "Activar edición" → Agregar actividad → Cuestionario</p>
                  <p>• Nombre: "Examen Anticopia - [Tu Materia]"</p>
                  <p>• <strong>Mentor guía navegación</strong>, <strong>Aprendiz define configuración educativa</strong></p>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                  Paso 2: Configurar estrategias de presentación anticopia
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>En "Configuración del cuestionario" → "Presentación":</p>
                  <p>• ✅ <strong>Página nueva:</strong> "Cada pregunta" (evita ver todas juntas)</p>
                  <p>• ✅ <strong>Orden de preguntas:</strong> "Aleatoriamente"</p>
                  <p>• ✅ <strong>Navegación:</strong> "Secuencial" (no puede regresar)</p>
                  <p>• ✅ <strong>Orden de opciones:</strong> "Aleatoriamente" (A,B,C,D cambian)</p>
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
                  Paso 3: Configurar restricciones de tiempo y intentos
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>En "Temporización":</p>
                  <p>• ⏰ <strong>Límite de tiempo:</strong> 30 minutos (suficiente pero presión)</p>
                  <p>• ⏰ <strong>Finalización automática:</strong> "SÍ" (se cierra solo)</p>
                  <p>En "Calificación":</p>
                  <p>• 🔄 <strong>Intentos permitidos:</strong> "1" (una sola oportunidad)</p>
                  <p>• 🔄 <strong>Método de calificación:</strong> "Intento con mayor puntuación"</p>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                  Paso 4: Configurar opciones de revisión anticopia
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>En "Opciones de revisión" elimina TODOS los checkboxes EXCEPTO:</p>
                  <p>• ✅ <strong>Inmediatamente después del intento:</strong> Solo "El intento"</p>
                  <p>• ❌ <strong>NO marcar:</strong> Respuestas correctas, puntuación, feedback</p>
                  <p>• ❌ <strong>NO marcar:</strong> Respuesta general del cuestionario</p>
                  <p>• <strong>Objetivo:</strong> Estudiante solo ve que completó, no aprende respuestas</p>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                  Paso 5: Agregar restricciones extra
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>En "Restricciones extra sobre los intentos":</p>
                  <p>• 🔐 <strong>Contraseña:</strong> "EXAMEN2024" (cambia por algo de tu materia)</p>
                  <p>• 📍 <strong>Restricción de red:</strong> Deja en blanco (para laboratorio)</p>
                  <p>• ⏱️ <strong>Retardo:</strong> "No permitir nuevo intento"</p>
                </div>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
                6
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                  Paso 6: Agregar preguntas con selección aleatoria
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• Haz clic en "Editar cuestionario"</p>
                  <p>• <strong>Agregar:</strong> "Una pregunta aleatoria"</p>
                  <p>• Selecciona categoría de tu banco de preguntas</p>
                  <p>• Configura: "5 preguntas aleatorias de 20 disponibles"</p>
                  <p>• <strong>Ventaja:</strong> Cada estudiante ve preguntas diferentes</p>
                </div>
              </div>
            </div>

            {/* Paso 7 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
                7
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                  Paso 7: Probar configuración anticopia
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• "Guardar y mostrar"</p>
                  <p>• Usa tu cuenta de estudiante (o pide a tu pareja)</p>
                  <p>• Experimenta el examen observando:</p>
                  <p className="ml-4">- ¿Las preguntas aparecen una por una?</p>
                  <p className="ml-4">- ¿El orden es aleatorio?</p>
                  <p className="ml-4">- ¿No puedes regresar a pregunta anterior?</p>
                  <p className="ml-4">- ¿Al terminar solo muestra que se completó?</p>
                </div>
              </div>
            </div>

            {/* Paso 8 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold">
                8
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-pink-500 bg-gray-700' : 'border-pink-500 bg-pink-50'} rounded-r-lg p-4`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-800'}`}>
                  Paso 8: Crear segundo examen con comportamiento adaptativo
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>• Crea nuevo cuestionario: "Examen Adaptativo - [Tu Materia]"</p>
                  <p>• En "Comportamiento de las preguntas":</p>
                  <p className="ml-4">- 🧠 <strong>Modo adaptativo:</strong> "Modo adaptativo (sin penalización)"</p>
                  <p className="ml-4">- <strong>Ventaja:</strong> Estudiante puede intentar hasta acertar, pero sin copia</p>
                  <p>• Configura 3 preguntas de diferentes dificultades</p>
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
              'Examen básico creado con configuración anticopia completa',
              'Estrategias de presentación aplicadas (página nueva, orden aleatorio)',
              'Restricciones de tiempo y intentos configuradas apropiadamente',
              'Opciones de revisión limitadas (solo "el intento")',
              'Contraseña y restricciones extra configuradas',
              'Preguntas aleatorias del banco agregadas exitosamente',
              'Examen probado desde perspectiva de estudiante',
              'Examen adaptativo creado como variante'
            ].map((item, index) => (
              <label key={index} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Notas Importantes */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            📝 Notas Importantes
          </h2>
          <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900/30 border-red-700' : 'bg-red-50 border-red-200'} border`}>
              <p><strong>Estrategias múltiples:</strong> La combinación de varias medidas es más efectiva que una sola</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border`}>
              <p><strong>Balance:</strong> Suficiente seguridad sin frustrar estudiantes honestos</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border`}>
              <p><strong>Preparación SEB:</strong> Estas configuraciones funcionan mejor cuando se combina con Safe Exam Browser</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity20;
