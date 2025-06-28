import React, { useState } from 'react';
import { ArrowLeft, Layers, CheckCircle2, Users, Clock, FolderOpen, Target, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity20 = ({ darkMode }) => {
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
              <span className="font-medium">Parejas</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Layers className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 20: BANCO POR TEMAS
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
          Generar 50+ preguntas organizadas por tema usando IA con formato Aiken automatizado,
          creando la base de un banco de preguntas profesional estructurado y listo para uso educativo real.
        </p>
      </div>

      {/* Estrategia de Organización */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📊 Estrategia de Organización por Temas
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>🥇 TEMA PRINCIPAL 1</h3>
            <div className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <p>• 15 preguntas</p>
              <p>• Tu tema más importante</p>
              <p>• Base del curso</p>
            </div>
          </div>

          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>🥈 TEMA PRINCIPAL 2</h3>
            <div className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <p>• 15 preguntas</p>
              <p>• Segundo tema clave</p>
              <p>• Complementa tema 1</p>
            </div>
          </div>

          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>🥉 TEMA ADICIONAL</h3>
            <div className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
              <p>• 10-20 preguntas</p>
              <p>• Tema de apoyo</p>
              <p>• Flexibilidad en cantidad</p>
            </div>
          </div>
        </div>

        <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} border-l-4 ${darkMode ? 'border-purple-500' : 'border-purple-400'}`}>
          <p className={`text-sm ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
            <strong>Meta total:</strong> 40-50 preguntas organizadas por temas que realmente usas en tu materia.
            Cada tema en archivo separado para máxima flexibilidad de uso.
          </p>
        </div>
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
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 1: Seleccionar temas estratégicos
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• De tu lista de 10 temas (Día 1), selecciona los 3 más importantes:</p>
                <p className="ml-4">- <strong>Tema Principal 1:</strong> El más fundamental de tu materia</p>
                <p className="ml-4">- <strong>Tema Principal 2:</strong> El segundo más importante</p>
                <p className="ml-4">- <strong>Tema Adicional:</strong> Uno que evalúas frecuentemente</p>
                <p>• <strong>Criterios de selección:</strong></p>
                <p className="ml-4">- Aparece en exámenes importantes</p>
                <p className="ml-4">- Es base para otros temas</p>
                <p className="ml-4">- Los estudiantes necesitan dominarlo</p>
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
                Paso 2: Preparar prompt automatizado optimizado
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• Usa tu prompt optimizado de la Actividad 18</p>
                <p>• <strong>Ajustes para producción masiva:</strong></p>
                <p className="ml-4">- Cambia <code>[NÚMERO]</code> por <strong>15</strong> (para temas principales)</p>
                <p className="ml-4">- Especifica subtemas si es necesario</p>
                <p className="ml-4">- Agrega instrucciones específicas para tu materia</p>
                <p>• <strong>División de trabajo:</strong></p>
                <p className="ml-4">- <strong>Aprendiz:</strong> Gestiona Tema Principal 1</p>
                <p className="ml-4">- <strong>Mentor:</strong> Gestiona Tema Principal 2</p>
                <p className="ml-4">- <strong>Juntos:</strong> Tema Adicional</p>
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
                Paso 3: Producción intensiva del Tema Principal 1 (15 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Aprendiz ejecuta producción:</strong></p>
                <p className="ml-4">1. Personaliza prompt para Tema Principal 1</p>
                <p className="ml-4">2. Ejecuta en IA y genera 15 preguntas</p>
                <p className="ml-4">3. Verifica formato Aiken inmediatamente</p>
                <p className="ml-4">4. Corrige errores sobre la marcha</p>
                <p className="ml-4">5. Guarda como "[Materia]_[Tema1]_15preguntas.txt"</p>
                <p>• <strong>Mentor supervisa y ayuda</strong> con aspectos técnicos</p>
                <p>• <strong>Meta:</strong> 15 preguntas perfectas en formato Aiken</p>
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
                Paso 4: Producción intensiva del Tema Principal 2 (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Mentor ejecuta producción:</strong></p>
                <p className="ml-4">1. Adapta prompt para Tema Principal 2</p>
                <p className="ml-4">2. Genera 15 preguntas con IA</p>
                <p className="ml-4">3. Verificación rápida de formato</p>
                <p className="ml-4">4. Guarda como "[Materia]_[Tema2]_15preguntas.txt"</p>
                <p>• <strong>Aprendiz revisa calidad</strong> del contenido educativo</p>
                <p>• <strong>Ventaja:</strong> El mentor ya domina el proceso técnico</p>
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
                Paso 5: Producción colaborativa del Tema Adicional (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Trabajo colaborativo rápido:</strong></p>
                <p className="ml-4">- Decidan juntos: ¿10, 15 o 20 preguntas?</p>
                <p className="ml-4">- Aprendiz dicta el prompt, Mentor ejecuta</p>
                <p className="ml-4">- Verificación inmediata entre ambos</p>
                <p className="ml-4">- Guarda como "[Materia]_[Tema3]_[X]preguntas.txt"</p>
                <p>• <strong>Objetivo:</strong> Completar el banco temático rápidamente</p>
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
                Paso 6: Organización final y documentación
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Inventario final:</strong></p>
                <p className="ml-4">- Cuenta total de preguntas generadas</p>
                <p className="ml-4">- Verifica que tienes 3 archivos separados</p>
                <p className="ml-4">- Confirma nomenclatura consistente</p>
                <p>• <strong>Crea índice de contenido:</strong></p>
                <p className="ml-4">- "[Materia]_INDICE_BancoTemas.txt"</p>
                <p className="ml-4">- Lista qué temas tienes y cuántas preguntas por tema</p>
                <p>• <strong>Meta alcanzada:</strong> Banco organizado por temas listo para uso</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          📋 Lista de Cotejo
        </h2>
        <div className="space-y-3">
          {[
            '3 temas estratégicos seleccionados basándose en importancia curricular',
            'Prompt automatizado optimizado preparado para producción masiva',
            'Tema Principal 1: 15 preguntas generadas y verificadas (Aprendiz)',
            'Tema Principal 2: 15 preguntas generadas y verificadas (Mentor)',
            'Tema Adicional: 10-20 preguntas generadas colaborativamente',
            'Organización final completada con índice de contenido'
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <button
                onClick={() => toggleCheck(`checklist-${index}`)}
                className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
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
            <p><strong>Archivos separados = flexibilidad:</strong> Mantener cada tema en archivo separado permite crear exámenes especializados fácilmente.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Calidad sobre cantidad:</strong> Es mejor tener 40 preguntas excelentes que 60 preguntas mediocres. Verifica cada pregunta.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Base escalable:</strong> Esta estructura te permite agregar más temas fácilmente en el futuro sin reorganizar todo.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Aplicación inmediata:</strong> Estos bancos por tema son perfectos para exámenes parciales, quizzes rápidos y evaluaciones diferenciadas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity20;
