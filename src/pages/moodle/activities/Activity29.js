import React, { useState } from 'react';
import { ArrowLeft, Settings, CheckCircle2, Users, Clock, AlertTriangle, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity29 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    { id: 'password_restriction', text: 'Restricción de contraseña configurada y probada exitosamente' },
    { id: 'secure_window', text: 'Ventana emergente segura activada para prevenir navegación externa' },
    { id: 'question_delay', text: 'Delay entre preguntas configurado para evitar respuestas impulsivas' },
    { id: 'review_options', text: 'Opciones de revisión configuradas estratégicamente por fase' },
    { id: 'immediate_feedback', text: 'Retroalimentación inmediata habilitada para aprendizaje durante examen' },
    { id: 'student_tested', text: 'Configuración probada desde perspectiva estudiantil sin completar examen' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <ArrowLeft size={20} />
            Regresar al Curso
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                25 min
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Mentor + Aprendiz
              </span>
            </div>
          </div>
        </div>
        <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          ACTIVIDAD 29: CONFIGURACIÓN AVANZADA
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Implementar configuraciones avanzadas de seguridad y control en el examen
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-cyan-900' : 'bg-cyan-50'} rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-cyan-200' : 'text-cyan-700'} leading-relaxed`}>
          Implementar configuraciones avanzadas de seguridad y control en el examen, incluyendo restricciones
          de acceso, configuración de método de calificación y opciones de navegación sofisticadas.
        </p>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                Paso 1: Acceder a configuración avanzada del examen
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• En <code className="bg-gray-600 px-2 py-1 rounded text-sm">http://moodle.cbtis253.edu.mx/</code>, ve a tu curso y localiza el examen básico creado</p>
                <p>• Haz clic en el <strong>icono de configuración</strong> (engrane) junto al examen</p>
                <p>• Selecciona <strong>"Editar configuración"</strong></p>
                <p>• Verás todas las opciones organizadas en secciones expandibles</p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                Paso 2: Configurar restricciones de acceso avanzadas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Restricciones de acceso:</strong> Amplía esta sección</p>
                <p>• Haz clic en <strong>"Agregar restricción"</strong></p>
                <p>• Selecciona <strong>"Contraseña"</strong></p>
                <p>• <strong>Contraseña:</strong> Establece "EXAM2024" (cambiarás esto para cada examen real)</p>
                <p>• <strong>Descripción para estudiantes:</strong> "Solicita la contraseña al profesor antes del examen"</p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                Paso 3: Configurar seguridad del examen
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Restricciones adicionales durante el intento:</strong></p>
                <p className="ml-4">- <strong>Exigir contraseña:</strong> Ya configurada arriba</p>
                <p className="ml-4">- <strong>Restricción de IP:</strong> Dejar en blanco (para permitir desde casa)</p>
                <p className="ml-4">- <strong>Delay forzado:</strong> 30 segundos entre preguntas</p>
                <p className="ml-4">- <strong>Ventana emergente:</strong> Activar "Intentar mostrar examen en ventana 'segura'"</p>
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
                Paso 4: Configurar método de calificación y retroalimentación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Calificación:</strong></p>
                <p className="ml-4">- <strong>Decimales en calificaciones:</strong> 1 decimal</p>
                <p className="ml-4">- <strong>Decimales en puntos de pregunta:</strong> 0 decimales</p>
                <p>• <strong>Opciones de revisión:</strong></p>
                <p className="ml-4">- <strong>Durante el intento:</strong> Solo navegación</p>
                <p className="ml-4">- <strong>Inmediatamente después:</strong> Puntos, si es correcto, calificación total</p>
                <p className="ml-4">- <strong>Después pero antes del cierre:</strong> Todo excepto respuestas correctas</p>
                <p className="ml-4">- <strong>Después del cierre:</strong> Permitir todas las opciones</p>
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              5
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 5: Configurar comportamiento avanzado de preguntas
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Comportamiento de las preguntas:</strong></p>
                <p className="ml-4">- <strong>Mezclar:</strong> Mantener ambas opciones activadas</p>
                <p className="ml-4">- <strong>Cómo se comportan las preguntas:</strong> Cambiar a "Retroalimentación inmediata"</p>
                <p className="ml-4">- <strong>Permitir rehacer dentro del intento:</strong> Activar</p>
                <p className="ml-4">- <strong>Cada intento se basa en el anterior:</strong> Desactivar</p>
              </div>
            </div>
          </div>

          {/* Paso 6 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">
              6
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-teal-500 bg-gray-700' : 'border-teal-500 bg-teal-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-teal-300' : 'text-teal-800'}`}>
                Paso 6: Guardar y probar configuración completa
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Haz clic en <strong>"Guardar cambios y mostrar"</strong></p>
                <p>• <strong>Prueba como estudiante:</strong></p>
                <p className="ml-4">- Cambia a tu cuenta de estudiante</p>
                <p className="ml-4">- Intenta acceder al examen (debe pedir contraseña)</p>
                <p className="ml-4">- Ingresa "EXAM2024" y verifica que funcione</p>
                <p className="ml-4">- <strong>NO completes el examen</strong>, solo verifica acceso</p>
                <p>• Regresa a cuenta docente para continuar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-green-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Lista de Cotejo
          </h2>
        </div>
        <div className="space-y-3">
          {checklistItems.map((item) => (
            <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckChange(item.id)}
                className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
              />
              <span className={`${
                checkedItems[item.id]
                  ? 'line-through text-green-600'
                  : darkMode ? 'text-gray-300' : 'text-gray-700'
              } group-hover:text-green-600 transition-colors`}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-50'} rounded-lg p-6`}>
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
            Notas Importantes
          </h2>
        </div>
        <div className={`space-y-2 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <p>• <strong>Equilibrio seguridad-usabilidad:</strong> Estas configuraciones protegen sin frustrar estudiantes honestos</p>
          <p>• <strong>Contraseñas rotativas:</strong> Cambia la contraseña para cada aplicación real del examen</p>
          <p>• <strong>Moodle 4.5:</strong> Las opciones de revisión son más granulares y flexibles</p>
        </div>
      </div>
    </div>
  );
};

export default Activity29;
