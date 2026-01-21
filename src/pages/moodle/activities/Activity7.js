import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, Layout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity7 = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} mb-4`}
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Curso
          </button>

          <div className="flex items-center justify-between mb-4">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              ACTIVIDAD 7: CREAR SECCIONES TEMÁTICAS
            </h1>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="h-4 w-4" />
                <span>10 min</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users className="h-4 w-4" />
                <span>Ambos (4 por curso)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
            <Layout className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Agregar 4 secciones temáticas principales por curso y nombrarlas según el temario oficial
          </p>
        </div>

        {/* Instrucciones */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Instrucciones Paso a Paso
          </h2>

          <div className="space-y-6">
            {/* Paso 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                  Paso 1: Activar modo de edición
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Desde tu curso recién creado, localiza el botón "Activar edición"</li>
                  <li>• Generalmente está en la esquina superior derecha</li>
                  <li>• Haz clic para activar el modo de edición</li>
                  <li>• La interfaz cambiará mostrando iconos de edición</li>
                </ul>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  Paso 2: Identificar secciones existentes
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Observa las secciones numeradas que aparecen (Semana 1, Semana 2, etc.)</li>
                  <li>• Nota que la Sección 0 o General se encuentra en la parte superior</li>
                  <li>• Identifica que necesitas renombrar las primeras 4 secciones</li>
                </ul>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                  Paso 3: Editar nombres de secciones
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• En cada sección a renombrar, busca el ícono de edición (lápiz)</li>
                  <li>• Haz clic en "Editar nombre de sección" o ícono similar</li>
                  <li>• Escribe un nombre temático descriptivo para tu materia</li>
                  <li>• Presiona Enter o haz clic en ✓ para confirmar</li>
                </ul>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                  Paso 4: Sugerencias de nombres temáticos
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p><strong>Ejemplos para diferentes materias:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Matemáticas:</strong> "Álgebra Básica", "Geometría Plana", "Funciones", "Probabilidad"</li>
                    <li>• <strong>Química:</strong> "Enlaces Químicos", "Reacciones Básicas", "Estequiometría", "Laboratorio"</li>
                    <li>• <strong>Historia:</strong> "Antecedentes", "Revolución", "Época Moderna", "Análisis Final"</li>
                    <li>• <strong>Programación:</strong> "Fundamentos", "Estructuras", "Algoritmos", "Proyectos"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                  Paso 5: Agregar contenido introductorio
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• En cada sección renombrada, haz clic en "Agregar una actividad o recurso"</li>
                  <li>• Selecciona "Etiqueta" para agregar texto descriptivo</li>
                  <li>• Escribe una breve descripción de qué se verá en esa unidad</li>
                  <li>• Incluye objetivos específicos de la sección (2-3 puntos)</li>
                </ul>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
                6
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-indigo-500 bg-gray-700' : 'border-indigo-500 bg-indigo-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                  Paso 6: Configurar visibilidad
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Decide si las secciones serán visibles desde el inicio o progresivas</li>
                  <li>• Para principiantes: deja todas visibles</li>
                  <li>• Para cursos avanzados: considera ocultar secciones futuras</li>
                  <li>• Usa el ícono del ojo para controlar visibilidad de cada sección</li>
                </ul>
              </div>
            </div>

            {/* Paso 7 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-semibold">
                7
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-cyan-500 bg-gray-700' : 'border-cyan-500 bg-cyan-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>
                  Paso 7: Verificar estructura final
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Desactiva el modo de edición para ver cómo se ve para estudiantes</li>
                  <li>• Verifica que los nombres de secciones sean claros y descriptivos</li>
                  <li>• Confirma que la estructura sigue una secuencia lógica</li>
                  <li>• Prueba la navegación entre secciones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Cotejo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            Lista de Cotejo
          </h2>
          <div className="space-y-3">
            {[
              'Modo de edición activado exitosamente',
              '4 secciones temáticas renombradas con nombres descriptivos',
              'Contenido introductorio agregado a cada sección',
              'Secuencia lógica de temas verificada',
              'Navegación entre secciones probada y funcional'
            ].map((item, index) => (
              <label key={index} className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'} cursor-pointer`}>
                <input type="checkbox" className="rounded" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notas Importantes */}
        <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-4`}>
          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            Notas Importantes
          </h3>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
            <li>• <strong>Para Moodle 4.5:</strong> Los iconos de edición pueden verse diferentes pero mantienen la misma funcionalidad</li>
            <li>• <strong>Parejas mentor-aprendiz:</strong> Ambos deben crear 4 secciones, totalizando 8 secciones temáticas</li>
            <li>• <strong>Pedagógico:</strong> Los nombres de secciones deben ser comprensibles para estudiantes de tu nivel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity7;
