import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const ProyectoIntegradorModelacion = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);

  const pasos = [
    {
      titulo: "¡Bienvenido al Proyecto Final!",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-4">
              🎯 Tu Proyecto Integrador de Modelación Matemática
            </h3>
            <p className="text-purple-700 dark:text-purple-300 text-lg">
              ¡Felicidades! Has llegado al momento más emocionante del semestre. En este proyecto vas a convertirte en un verdadero <strong>investigador matemático</strong> y descubrir cómo las matemáticas explican fenómenos fascinantes de tu mundo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">🔍 ¿Qué harás?</h4>
              <ul className="text-green-700 dark:text-green-300 space-y-2">
                <li>• Elegirás un fenómeno que te fascine</li>
                <li>• Recopilarás datos reales</li>
                <li>• Crearás un modelo matemático</li>
                <li>• Calcularás derivadas e interpretarás</li>
                <li>• Validarás tu modelo</li>
                <li>• Presentarás tus descobrimientos</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">💡 ¿Por qué es importante?</h4>
              <ul className="text-blue-700 dark:text-blue-300 space-y-2">
                <li>• Aplicarás todo lo aprendido</li>
                <li>• Resolverás problemas reales</li>
                <li>• Desarrollarás pensamiento crítico</li>
                <li>• Conectarás matemáticas con tu vida</li>
                <li>• Prepararás tu futuro académico</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">⏰ Cronograma del Proyecto</h4>
            <div className="grid md:grid-cols-3 gap-4 text-yellow-700 dark:text-yellow-300">
              <div className="text-center">
                <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                <strong>Semana 1</strong><br/>Elección y planificación
              </div>
              <div className="text-center">
                <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                <strong>Semana 2</strong><br/>Desarrollo y modelación
              </div>
              <div className="text-center">
                <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                <strong>Semana 3</strong><br/>Presentación y defensa
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🤔 ¿Qué Fenómeno Te Interesa?",
      contenido: (
        <div className="space-y-6">
          <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">
              Elige Tu Área de Investigación
            </h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-4">
              El primer paso es elegir un fenómeno que realmente te emocione investigar. Recuerda que trabajarás con él durante varias semanas, así que <strong>elige algo que te apasione</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-rose-50 dark:bg-rose-900 p-5 rounded-lg">
              <h4 className="font-bold text-rose-800 dark:text-rose-200 mb-3">🏃‍♂️ Deportes y Actividad Física</h4>
              <ul className="text-rose-700 dark:text-rose-300 space-y-1 text-sm">
                <li>• Velocidad de corredores en maratones</li>
                <li>• Trayectoria de pelotas de fútbol</li>
                <li>• Rendimiento de nadadores</li>
                <li>• Salto de altura o longitud</li>
                <li>• Resistencia en ciclismo</li>
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900 p-5 rounded-lg">
              <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-3">🌿 Naturaleza y Ambiente</h4>
              <ul className="text-emerald-700 dark:text-emerald-300 space-y-1 text-sm">
                <li>• Crecimiento de plantas locales</li>
                <li>• Población de aves migratorias</li>
                <li>• Niveles de lluvia en Chetumal</li>
                <li>• Temperatura en cenotes</li>
                <li>• Mareas en la Bahía de Chetumal</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">🎵 Música y Arte</h4>
              <ul className="text-purple-700 dark:text-purple-300 space-y-1 text-sm">
                <li>• Frecuencias en música maya</li>
                <li>• Resonancia en instrumentos</li>
                <li>• Popularidad de canciones</li>
                <li>• Acústica de espacios</li>
                <li>• Ritmos cardíacos y música</li>
              </ul>
            </div>

            <div className="bg-cyan-50 dark:bg-cyan-900 p-5 rounded-lg">
              <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-3">📱 Tecnología y Sociedad</h4>
              <ul className="text-cyan-700 dark:text-cyan-300 space-y-1 text-sm">
                <li>• Duración de baterías de celular</li>
                <li>• Crecimiento de redes sociales</li>
                <li>• Velocidad de internet en la región</li>
                <li>• Uso de aplicaciones móviles</li>
                <li>• Señales de radio y TV</li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900 p-5 rounded-lg">
              <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">🏛️ Economía y Turismo Local</h4>
              <ul className="text-amber-700 dark:text-amber-300 space-y-1 text-sm">
                <li>• Visitantes a zonas arqueológicas</li>
                <li>• Precios de productos locales</li>
                <li>• Ocupación hotelera</li>
                <li>• Ventas en mercados</li>
                <li>• Transporte público</li>
              </ul>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900 p-5 rounded-lg">
              <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3">🏥 Salud y Bienestar</h4>
              <ul className="text-teal-700 dark:text-teal-300 space-y-1 text-sm">
                <li>• Ritmo cardíaco durante ejercicio</li>
                <li>• Crecimiento y desarrollo</li>
                <li>• Niveles de glucosa</li>
                <li>• Ciclos de sueño</li>
                <li>• Efectos de la dieta</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900 p-5 rounded-lg">
            <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3">🎯 Consejo del Profesor</h4>
            <p className="text-orange-700 dark:text-orange-300">
              No te preocupes si tu idea no está en la lista. <strong>¡Cualquier fenómeno que te interese puede funcionar!</strong> Lo importante es que puedas obtener datos numéricos y que el fenómeno cambie con el tiempo o con otra variable.
            </p>
          </div>
        </div>
      )
    },
    {
      titulo: "📊 Tipos de Funciones que Puedes Usar",
      contenido: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              🔧 Tu Caja de Herramientas Matemáticas
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              Durante el semestre has aprendido a trabajar con diferentes tipos de funciones. Aquí tienes un recordatorio de cuándo usar cada una:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">📈 Funciones Lineales</h4>
              <div className="text-green-700 dark:text-green-300 mb-3">
                <strong>f(x) = mx + b</strong>
              </div>
              <p className="text-green-600 dark:text-green-400 mb-2 text-sm"><strong>¿Cuándo usarla?</strong></p>
              <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                <li>• Crecimiento constante</li>
                <li>• Relación proporcional directa</li>
                <li>• Velocidad constante</li>
              </ul>
              <p className="text-green-600 dark:text-green-400 mt-2 text-sm"><strong>Ejemplos:</strong> Ahorro mensual, velocidad de auto, costo por producto</p>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-5 rounded-lg">
              <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">📐 Funciones Cuadráticas</h4>
              <div className="text-red-700 dark:text-red-300 mb-3">
                <strong>f(x) = ax² + bx + c</strong>
              </div>
              <p className="text-red-600 dark:text-red-400 mb-2 text-sm"><strong>¿Cuándo usarla?</strong></p>
              <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                <li>• Trayectorias parabólicas</li>
                <li>• Aceleración constante</li>
                <li>• Fenómenos con máximo/mínimo</li>
              </ul>
              <p className="text-red-600 dark:text-red-400 mt-2 text-sm"><strong>Ejemplos:</strong> Tiro parabólico, ganancias vs precio, área optimizada</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">📊 Funciones Exponenciales</h4>
              <div className="text-purple-700 dark:text-purple-300 mb-3">
                <strong>f(x) = ab^x</strong>
              </div>
              <p className="text-purple-600 dark:text-purple-400 mb-2 text-sm"><strong>¿Cuándo usarla?</strong></p>
              <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                <li>• Crecimiento acelerado</li>
                <li>• Decaimiento exponencial</li>
                <li>• Poblaciones, virus, dinero</li>
              </ul>
              <p className="text-purple-600 dark:text-purple-400 mt-2 text-sm"><strong>Ejemplos:</strong> Población bacteriana, interés compuesto, radioactividad</p>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900 p-5 rounded-lg">
              <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">🌊 Funciones Trigonométricas</h4>
              <div className="text-indigo-700 dark:text-indigo-300 mb-3">
                <strong>f(x) = A·sen(Bx + C) + D</strong>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 mb-2 text-sm"><strong>¿Cuándo usarla?</strong></p>
              <ul className="text-indigo-700 dark:text-indigo-300 text-sm space-y-1">
                <li>• Fenómenos periódicos</li>
                <li>• Oscilaciones</li>
                <li>• Ciclos naturales</li>
              </ul>
              <p className="text-indigo-600 dark:text-indigo-400 mt-2 text-sm"><strong>Ejemplos:</strong> Mareas, temperatura diaria, ondas sonoras</p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-5 rounded-lg">
              <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3">🔗 Funciones Combinadas</h4>
              <div className="text-orange-700 dark:text-orange-300 mb-3">
                <strong>Múltiples funciones juntas</strong>
              </div>
              <p className="text-orange-600 dark:text-orange-400 mb-2 text-sm"><strong>¿Cuándo usarla?</strong></p>
              <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                <li>• Fenómenos complejos</li>
                <li>• Tendencias + oscilaciones</li>
                <li>• Múltiples efectos</li>
              </ul>
              <p className="text-orange-600 dark:text-orange-400 mt-2 text-sm"><strong>Ejemplos:</strong> Ventas estacionales con crecimiento, temperatura con cambio climático</p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900 p-5 rounded-lg">
              <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3">🔄 Funciones Logarítmicas</h4>
              <div className="text-teal-700 dark:text-teal-300 mb-3">
                <strong>f(x) = a·log(bx + c) + d</strong>
              </div>
              <p className="text-teal-600 dark:text-teal-400 mb-2 text-sm"><strong>¿Cuándo usarla?</strong></p>
              <ul className="text-teal-700 dark:text-teal-300 text-sm space-y-1">
                <li>• Crecimiento que se frena</li>
                <li>• Saturación gradual</li>
                <li>• Aprendizaje, adopción</li>
              </ul>
              <p className="text-teal-600 dark:text-teal-400 mt-2 text-sm"><strong>Ejemplos:</strong> Adopción de tecnología, aprendizaje de idiomas, capacidad de carga</p>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🎯 Metodología del Proyecto",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
              📋 Los 6 Pasos de tu Investigación Matemática
            </h3>
            <p className="text-green-700 dark:text-green-300">
              Como un verdadero científico, seguirás una metodología sistemática para garantizar que tu proyecto sea riguroso y exitoso.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                <h4 className="font-bold text-blue-800 dark:text-blue-200">Definir Variables</h4>
              </div>
              <div className="text-blue-700 dark:text-blue-300 ml-11">
                <p className="mb-2"><strong>¿Qué harás?</strong> Identificar qué variables vas a medir</p>
                <p className="text-sm"><strong>Ejemplo:</strong> Si estudias rendimiento deportivo: Variable independiente = tiempo de entrenamiento, Variable dependiente = velocidad máxima</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                <h4 className="font-bold text-green-800 dark:text-green-200">Recopilar Datos</h4>
              </div>
              <div className="text-green-700 dark:text-green-300 ml-11">
                <p className="mb-2"><strong>¿Qué harás?</strong> Obtener al menos 15-20 puntos de datos reales</p>
                <p className="text-sm"><strong>Fuentes:</strong> Internet, encuestas, mediciones, bases de datos públicas, experimentos</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-3">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                <h4 className="font-bold text-purple-800 dark:text-purple-200">Elegir Tipo de Función</h4>
              </div>
              <div className="text-purple-700 dark:text-purple-300 ml-11">
                <p className="mb-2"><strong>¿Qué harás?</strong> Analizar el comportamiento de tus datos y elegir el modelo más apropiado</p>
                <p className="text-sm"><strong>Herramientas:</strong> Gráfica de dispersión, análisis de tendencias, coeficiente de correlación</p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-5 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-3">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                <h4 className="font-bold text-orange-800 dark:text-orange-200">Ajustar Parámetros</h4>
              </div>
              <div className="text-orange-700 dark:text-orange-300 ml-11">
                <p className="mb-2"><strong>¿Qué harás?</strong> Encontrar los valores de los parámetros que mejor ajusten tu modelo a los datos</p>
                <p className="text-sm"><strong>Métodos:</strong> Mínimos cuadrados, regresión, ajuste visual</p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-5 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center mb-3">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</div>
                <h4 className="font-bold text-red-800 dark:text-red-200">Calcular Derivada</h4>
              </div>
              <div className="text-red-700 dark:text-red-300 ml-11">
                <p className="mb-2"><strong>¿Qué harás?</strong> Encontrar f&apos;(x) e interpretar qué representa físicamente</p>
                <p className="text-sm"><strong>Análisis:</strong> Puntos críticos, máximos y mínimos, intervalos de crecimiento, tasa de cambio</p>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900 p-5 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-center mb-3">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</div>
                <h4 className="font-bold text-indigo-800 dark:text-indigo-200">Interpretar Resultados</h4>
              </div>
              <div className="text-indigo-700 dark:text-indigo-300 ml-11">
                <p className="mb-2"><strong>¿Qué harás?</strong> Explicar qué significan matemáticamente tus resultados en el contexto real</p>
                <p className="text-sm"><strong>Incluye:</strong> Validación del modelo, limitaciones, predicciones, aplicaciones prácticas</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "💡 Ejemplo Completo: Temperatura en Chetumal",
      contenido: (
        <div className="space-y-6">
          <div className="bg-amber-50 dark:bg-amber-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">
              🌡️ Caso de Estudio: Variación de Temperatura Anual
            </h3>
            <p className="text-amber-700 dark:text-amber-300">
              Veamos un ejemplo completo para que entiendas exactamente qué espero de tu proyecto. Imagina que quieres estudiar cómo cambia la temperatura en Chetumal a lo largo del año.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">📊 Paso 1: Definir Variables</h4>
              <div className="text-blue-700 dark:text-blue-300">
                <p><strong>Variable independiente (x):</strong> Mes del año (1 = enero, 2 = febrero, ...)</p>
                <p><strong>Variable dependiente (y):</strong> Temperatura promedio mensual (°C)</p>
                <p><strong>Hipótesis:</strong> La temperatura sigue un patrón periódico anual con máximos en mayo y mínimos en enero</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">📈 Paso 2: Datos Recopilados (ejemplo)</h4>
              <div className="text-green-700 dark:text-green-300">
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm">
                  Ene: 23°C, Feb: 24°C, Mar: 26°C, Abr: 28°C, May: 30°C, Jun: 29°C<br/>
                  Jul: 29°C, Ago: 29°C, Sep: 28°C, Oct: 26°C, Nov: 24°C, Dic: 23°C
                </div>
                <p className="mt-2"><strong>Fuente:</strong> CONAGUA, estación meteorológica Chetumal</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">🔄 Paso 3: Tipo de Función</h4>
              <div className="text-purple-700 dark:text-purple-300">
                <p><strong>Observación:</strong> Los datos muestran un patrón cíclico que se repite cada 12 meses</p>
                <p><strong>Elección:</strong> Función trigonométrica (coseno)</p>
                <p><strong>Justificación:</strong> Las temperaturas oscilan periódicamente alrededor de un valor promedio</p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-5 rounded-lg">
              <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3">⚙️ Paso 4: Modelo Ajustado</h4>
              <div className="text-orange-700 dark:text-orange-300">
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm mb-2">
                  T(t) = 26 + 3.5·cos(π(t-5)/6)
                </div>
                <p><strong>Significado de parámetros:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>26: Temperatura promedio anual</li>
                  <li>3.5: Variación máxima (amplitud)</li>
                  <li>π/6: Frecuencia (período de 12 meses)</li>
                  <li>-5: Desfase (máximo en mayo, mes 5)</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-5 rounded-lg">
              <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">📐 Paso 5: Derivada y Análisis</h4>
              <div className="text-red-700 dark:text-red-300">
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm mb-2">
                  T&apos;(t) = -3.5 · (π/6) · sen(π(t-5)/6)
                </div>
                <p><strong>Interpretación física:</strong> T&apos;(t) representa la <em>tasa de cambio de temperatura</em></p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>T&apos;(t) &gt; 0: La temperatura está aumentando</li>
                  <li>T&apos;(t) &lt; 0: La temperatura está disminuyendo</li>
                  <li>T&apos;(t) = 0: Temperatura en máximo o mínimo</li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900 p-5 rounded-lg">
              <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">🎯 Paso 6: Interpretación y Validación</h4>
              <div className="text-indigo-700 dark:text-indigo-300">
                <p><strong>Conclusiones:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>El modelo predice temperaturas máximas en mayo (29.5°C) y mínimas en noviembre (22.5°C)</li>
                  <li>La tasa de cambio más alta ocurre en marzo y septiembre</li>
                  <li>El modelo tiene una precisión del 95% con los datos reales</li>
                  <li><strong>Aplicación práctica:</strong> Planificación de cultivos, turismo, consumo energético</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🚀 ¡Hora de Empezar tu Proyecto!",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
              🎯 Define tu Propuesta de Proyecto
            </h3>
            <p className="text-green-700 dark:text-green-300 text-lg">
              ¡Perfecto! Ahora que entiendes la metodología y has visto un ejemplo completo, es momento de que definas tu propuesta de proyecto.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">📝 Plantilla para tu Propuesta</h4>
            <div className="text-yellow-700 dark:text-yellow-300 space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p><strong>Título del proyecto:</strong> _______________________</p>
                <p><strong>Fenómeno a estudiar:</strong> _______________________</p>
                <p><strong>Variable independiente:</strong> _______________________</p>
                <p><strong>Variable dependiente:</strong> _______________________</p>
                <p><strong>Hipótesis inicial:</strong> _______________________</p>
                <p><strong>Fuente de datos:</strong> _______________________</p>
                <p><strong>Tipo de función esperada:</strong> _______________________</p>
                <p><strong>¿Por qué te interesa este tema?</strong> _______________________</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">✅ Criterios de Evaluación</h4>
              <ul className="text-green-700 dark:text-green-300 space-y-1 text-sm">
                <li>• Originalidad y relevancia (15%)</li>
                <li>• Calidad de datos recopilados (25%)</li>
                <li>• Adecuación del modelo elegido (20%)</li>
                <li>• Corrección de cálculos matemáticos (25%)</li>
                <li>• Interpretación y análisis (15%)</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">📅 Fechas Importantes</h4>
              <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
                <li>• <strong>Hoy:</strong> Entrega de propuesta</li>
                <li>• <strong>Semana 2:</strong> Revisión de avances</li>
                <li>• <strong>Semana 3:</strong> Entrega final</li>
                <li>• <strong>Semana 3:</strong> Presentaciones orales</li>
                <li>• <strong>Semana 4:</strong> Pre-examen integrador</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">💡 Consejos Finales del Profesor</h4>
            <ul className="text-purple-700 dark:text-purple-300 space-y-2 text-sm">
              <li>• <strong>Sé ambicioso pero realista:</strong> Elige un proyecto desafiante pero factible</li>
              <li>• <strong>Documenta todo:</strong> Guarda todas tus fuentes y cálculos</li>
              <li>• <strong>Pide ayuda cuando la necesites:</strong> Estoy aquí para apoyarte</li>
              <li>• <strong>Disfruta el proceso:</strong> ¡Vas a descubrir matemáticas increíbles!</li>
              <li>• <strong>Piensa en aplicaciones:</strong> ¿Cómo puede beneficiar esto a tu comunidad?</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900 p-5 rounded-lg">
            <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">🎯 Tu Siguiente Paso</h4>
            <p className="text-red-700 dark:text-red-300">
              <strong>¡Llena la propuesta y compártela conmigo!</strong> Una vez que tengas clara tu idea, pasaremos a la siguiente actividad donde desarrollaremos tu proyecto paso a paso. Recuerda: <em>No hay ideas malas, solo hay ideas que necesitan refinarse</em>. 🌟
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Proyecto Integrador - Progresión 14
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white text-center">
              🎓 Proyecto Integrador: Modelación con Funciones Derivables
            </CardTitle>
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Progresión 14 • Paso {currentStep} de {pasos.length}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {pasos[currentStep - 1].titulo}
                </h2>
                {pasos[currentStep - 1].contenido}
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentStep === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  ← Anterior
                </button>
                
                <div className="flex space-x-2">
                  {pasos.map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentStep(index + 1)}
                      className={`w-10 h-10 rounded-full font-bold ${
                        index + 1 === currentStep
                          ? 'bg-purple-500 text-white'
                          : index + 1 < currentStep
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1 < currentStep ? '✓' : index + 1}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentStep(Math.min(pasos.length, currentStep + 1))}
                  disabled={currentStep === pasos.length}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentStep === pasos.length
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProyectoIntegradorModelacion;