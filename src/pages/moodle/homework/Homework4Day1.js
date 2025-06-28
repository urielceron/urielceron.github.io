import React from 'react';
import { ArrowLeft, CheckCircle2, Users, Clock, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework4Day1 = ({ darkMode }) => {
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
              TRABAJO EN CASA DÍA 1 - ACTIVIDAD 4 (15 min): PREPARACIÓN DÍA 2
            </h1>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="h-4 w-4" />
                <span>15 min</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Users className="h-4 w-4" />
                <span>Trabajo en Casa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'} border rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
            <Calendar className="h-6 w-6" />
            Objetivo
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Preparar materiales y conocimientos necesarios para el DÍA 2 enfocado en IA y creación de preguntas
          </p>
        </div>

        {/* Vista Previa DÍA 2 */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Vista Previa: DÍA 2 - IA Y CREACIÓN DE PREGUNTAS
          </h2>

          <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg border ${darkMode ? 'border-blue-700' : 'border-blue-200'}`}>
            <div className={`space-y-3 ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              <div><strong>🎯 Objetivo del DÍA 2:</strong> Dominar IA para generar preguntas de calidad</div>
              <div><strong>🕐 Duración:</strong> 2.5 horas presenciales + 2.5 horas casa</div>
              <div><strong>📋 Actividades principales:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• Registro y familiarización con herramientas de IA</li>
                <li>• Creación de prompts educativos efectivos</li>
                <li>• Generación de bancos de preguntas</li>
                <li>• Formato Aiken para importación a Moodle</li>
                <li>• Validación pedagógica de preguntas</li>
              </ul>
            </div>
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
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                  Paso 1: Listar 10 temas de tu materia
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Crea un documento de texto con 10 temas específicos de tu materia:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Sean específicos:</strong> En lugar de "Química", escribir "Enlace iónico y covalente"</li>
                    <li>• <strong>Sean evaluables:</strong> Temas sobre los que puedas crear preguntas</li>
                    <li>• <strong>Sean graduales:</strong> Del más básico al más avanzado</li>
                    <li>• <strong>Ejemplo para Matemáticas:</strong> "Factorización de trinomios", "Ecuaciones cuadráticas", etc.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  Paso 2: Identificar 3 dudas específicas
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Lista 3 dudas concretas para resolver con tu pareja del taller:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Técnicas:</strong> Sobre Moodle, formato Aiken, o herramientas</li>
                    <li>• <strong>Pedagógicas:</strong> Sobre tipos de preguntas o evaluación</li>
                    <li>• <strong>Específicas de tu materia:</strong> Cómo evaluar conceptos complejos</li>
                  </ul>
                  <p>Ejemplos: "¿Cómo crear preguntas de aplicación para cálculo?", "¿Qué formato usar para fórmulas?", "¿Cómo importar imágenes en preguntas?"</p>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                  Paso 3: Registrarse en herramientas de IA
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Si no tienes cuenta, regístrate en al menos una de estas herramientas:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>ChatGPT:</strong> chat.openai.com (recomendado)</li>
                    <li>• <strong>Claude:</strong> claude.ai (muy bueno para educación)</li>
                    <li>• <strong>Gemini:</strong> gemini.google.com (gratis con Gmail)</li>
                  </ul>
                  <p>Tip: Crea cuentas en 2-3 herramientas para comparar resultados</p>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className={`flex-1 border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-purple-500 bg-purple-50'} rounded-r-lg`}>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                  Paso 4: Prueba inicial de IA (opcional pero recomendado)
                </h3>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Si tienes tiempo, haz una prueba rápida:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Escribe: "Crea 3 preguntas de opción múltiple sobre [tu primer tema]"</li>
                    <li>• Observa qué tipo de respuesta obtienes</li>
                    <li>• Nota qué aspectos necesitas mejorar</li>
                    <li>• Esto te dará ventaja para mañana</li>
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
                  Paso 5: Organizar materiales para mañana
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Guarda tu lista de 10 temas en un lugar accesible</li>
                  <li>• Anota las 3 dudas que quieres resolver</li>
                  <li>• Confirma que tienes acceso a tus cuentas de IA</li>
                  <li>• Revisa que tengas acceso estable a internet</li>
                  <li>• Opcional: Trae una USB para guardar tus archivos de preguntas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Plantilla de Preparación */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Plantilla de Preparación
          </h2>

          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg font-mono text-sm`}>
            <div className="space-y-4">
              <div>
                <div className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>MATERIA: ________________</div>
                <div className={`font-bold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>DOCENTE: ________________</div>
              </div>

              <div>
                <div className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>10 TEMAS PARA CREAR PREGUNTAS:</div>
                <div className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div>1. _________________________________</div>
                  <div>2. _________________________________</div>
                  <div>3. _________________________________</div>
                  <div>4. _________________________________</div>
                  <div>5. _________________________________</div>
                  <div>6. _________________________________</div>
                  <div>7. _________________________________</div>
                  <div>8. _________________________________</div>
                  <div>9. _________________________________</div>
                  <div>10. ________________________________</div>
                </div>
              </div>

              <div>
                <div className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>3 DUDAS ESPECÍFICAS:</div>
                <div className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div>1. _________________________________</div>
                  <div>2. _________________________________</div>
                  <div>3. _________________________________</div>
                </div>
              </div>

              <div>
                <div className={`font-bold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>CUENTAS DE IA CREADAS:</div>
                <div className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div>□ ChatGPT (chat.openai.com)</div>
                  <div>□ Claude (claude.ai)</div>
                  <div>□ Gemini (gemini.google.com)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplos por Materia */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Ejemplos de Temas por Materia
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                📐 Matemáticas
              </h3>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
                <li>1. Operaciones con números enteros</li>
                <li>2. Factorización de trinomios</li>
                <li>3. Ecuaciones lineales</li>
                <li>4. Sistemas de ecuaciones 2x2</li>
                <li>5. Teorema de Pitágoras</li>
                <li>6. Áreas y perímetros</li>
                <li>7. Funciones lineales</li>
                <li>8. Probabilidad básica</li>
                <li>9. Estadística descriptiva</li>
                <li>10. Ecuaciones cuadráticas</li>
              </ul>
            </div>

            <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-50'} p-4 rounded-lg`}>
              <h3 className={`font-bold mb-3 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                ⚗️ Química
              </h3>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-green-100' : 'text-green-700'}`}>
                <li>1. Estructura atómica básica</li>
                <li>2. Tabla periódica y propiedades</li>
                <li>3. Enlaces iónicos</li>
                <li>4. Enlaces covalentes</li>
                <li>5. Nomenclatura inorgánica</li>
                <li>6. Balanceo de ecuaciones</li>
                <li>7. Estequiometría básica</li>
                <li>8. Estados de la materia</li>
                <li>9. Soluciones y concentraciones</li>
                <li>10. Reacciones ácido-base</li>
              </ul>
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
              'Lista de 10 temas específicos de mi materia completada',
              '3 dudas concretas identificadas para resolver con la pareja',
              'Cuenta creada en al menos una herramienta de IA',
              'Materiales organizados y accesibles para mañana',
              'Prueba inicial de IA realizada (opcional)'
            ].map((item, index) => (
              <label key={index} className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'} cursor-pointer`}>
                <input type="checkbox" className="rounded" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Beneficios de la Preparación */}
        <div className={`${darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-4 mb-6`}>
          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
            Beneficios de esta Preparación
          </h3>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
            <li>• <strong>Eficiencia:</strong> Aprovecharás mejor el tiempo del DÍA 2</li>
            <li>• <strong>Personalización:</strong> Las preguntas serán específicas para tu materia</li>
            <li>• <strong>Resolución de dudas:</strong> Tendrás apoyo directo del mentor/aprendiz</li>
            <li>• <strong>Práctica inmediata:</strong> Podrás aplicar lo aprendido con tus temas reales</li>
          </ul>
        </div>

        {/* Notas Importantes */}
        <div className={`${darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-4`}>
          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
            Notas Importantes
          </h3>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
            <li>• <strong>Familiarización hoy facilita trabajo intensivo mañana:</strong> Una buena preparación garantiza mejor aprovechamiento</li>
            <li>• <strong>Trabajo colaborativo:</strong> Las dudas que identifies serán resueltas en pareja</li>
            <li>• <strong>Aplicación inmediata:</strong> Los temas que listes se convertirán en preguntas reales para tus cursos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homework4Day1;
