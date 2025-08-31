import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const AsesoriaProyectoFinal = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentStep, setCurrentStep] = useState(1);

  const pasos = [
    {
      titulo: "🔍 Revisión y Refinamiento de tu Propuesta",
      contenido: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              📋 Checkpoint: ¿Está Lista tu Propuesta?
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              Antes de continuar con el desarrollo completo, vamos a revisar y pulir tu propuesta. Este paso es crucial para asegurar el éxito de tu proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">✅ Lista de Verificación</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 border-2 border-green-500 rounded"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm">¿Tienes un fenómeno claramente definido?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 border-2 border-green-500 rounded"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm">¿Identificaste las variables independiente y dependiente?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 border-2 border-green-500 rounded"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm">¿Sabes dónde obtener al menos 15-20 datos?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 border-2 border-green-500 rounded"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm">¿Tienes una hipótesis sobre el tipo de función?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 border-2 border-green-500 rounded"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm">¿El tema te motiva genuinamente?</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg">
              <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">⚠️ Señales de Alerta</h4>
              <ul className="text-yellow-700 dark:text-yellow-300 space-y-2 text-sm">
                <li>🔸 Tu fenómeno es demasiado general ("la economía")</li>
                <li>🔸 No puedes obtener datos numéricos confiables</li>
                <li>🔸 El fenómeno no cambia con el tiempo o variables</li>
                <li>🔸 Es exactamente igual a un ejemplo del libro</li>
                <li>🔸 Requiere conocimientos muy avanzados</li>
                <li>🔸 Los datos son difíciles de interpretar</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">🔧 Refinando tu Propuesta</h4>
            <div className="text-purple-700 dark:text-purple-300 space-y-3">
              <p><strong>Si tu propuesta necesita ajustes, considera:</strong></p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Ser más específico</strong><br/>
                  <span className="text-sm">En lugar de "deportes" → "velocidad de corredores en 5km"</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Cambiar el enfoque</strong><br/>
                  <span className="text-sm">En lugar de "toda la población" → "mi escuela o colonia"</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Simplificar variables</strong><br/>
                  <span className="text-sm">Menos variables pero mejor medidas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900 p-5 rounded-lg">
            <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">💡 Propuestas de Emergencia</h4>
            <p className="text-red-700 dark:text-red-300 mb-3">Si necesitas cambiar completamente tu propuesta, aquí tienes ideas probadas:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong className="text-red-600 dark:text-red-400">Datos fáciles de obtener:</strong>
                <ul className="text-sm text-red-700 dark:text-red-300 mt-1">
                  <li>• Temperatura diaria (CONAGUA)</li>
                  <li>• Precios de gasolina (PEMEX)</li>
                  <li>• Casos COVID por semana (SSA)</li>
                  <li>• Población municipal (INEGI)</li>
                </ul>
              </div>
              <div>
                <strong className="text-red-600 dark:text-red-400">Datos que puedes generar:</strong>
                <ul className="text-sm text-red-700 dark:text-red-300 mt-1">
                  <li>• Rendimiento personal (ejercicio, estudio)</li>
                  <li>• Encuesta en redes sociales</li>
                  <li>• Experimento controlado simple</li>
                  <li>• Observación de fenómeno local</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "📊 Recopilación Sistemática de Datos",
      contenido: (
        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
              📈 La Calidad de los Datos Determina la Calidad del Proyecto
            </h3>
            <p className="text-green-700 dark:text-green-300">
              Ahora que tienes tu propuesta refinada, es momento de recopilar datos de forma sistemática y profesional. Recuerda: <strong>datos de mala calidad = conclusiones erróneas</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">🎯 Criterios de Calidad</h4>
              <div className="text-blue-700 dark:text-blue-300 space-y-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Cantidad mínima:</strong> 15-20 puntos de datos<br/>
                  <span className="text-sm">Más datos = modelo más confiable</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Fuente confiable:</strong> Organismos oficiales, mediciones propias<br/>
                  <span className="text-sm">Evita fuentes sin respaldo científico</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Rango amplio:</strong> Cubrir todo el dominio de interés<br/>
                  <span className="text-sm">No solo valores extremos o centrales</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Consistencia:</strong> Misma metodología de medición<br/>
                  <span className="text-sm">Unidades, precisión, condiciones similares</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-5 rounded-lg">
              <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3">🚨 Errores Comunes a Evitar</h4>
              <ul className="text-orange-700 dark:text-orange-300 space-y-2 text-sm">
                <li>❌ Mezclar fuentes con diferentes metodologías</li>
                <li>❌ Usar solo datos que confirman tu hipótesis</li>
                <li>❌ Ignorar valores atípicos sin justificación</li>
                <li>❌ No documentar las fuentes</li>
                <li>❌ Redondear excesivamente los valores</li>
                <li>❌ Usar datos desactualizados</li>
                <li>❌ No verificar la precisión de las mediciones</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">🔍 Plantilla de Documentación</h4>
            <div className="text-purple-700 dark:text-purple-300">
              <div className="bg-white dark:bg-gray-800 p-4 rounded font-mono text-sm">
                <strong>Tabla de Datos - [Título de tu proyecto]</strong><br/><br/>
                Variable independiente (x): _______________<br/>
                Variable dependiente (y): _______________<br/>
                Unidades: x en ________, y en ________<br/><br/>
                | x | y | Fuente | Fecha | Notas |<br/>
                |---|---|--------|-------|-------|<br/>
                | 1.2 | 15.7 | CONAGUA | 2024-01 | Condiciones normales |<br/>
                | 2.1 | 18.3 | CONAGUA | 2024-02 | Sin anomalías |<br/>
                | ... | ... | ... | ... | ... |<br/><br/>
                <strong>Fuentes consultadas:</strong><br/>
                1. [Nombre completo de la fuente]<br/>
                2. [URL o referencia bibliográfica]<br/>
                3. [Fecha de consulta]<br/><br/>
                <strong>Metodología de recopilación:</strong><br/>
                [Explica cómo obtuviste los datos]<br/><br/>
                <strong>Limitaciones identificadas:</strong><br/>
                [Qué aspectos podrían afectar la confiabilidad]
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg">
              <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">📚 Fuentes Oficiales</h5>
              <ul className="text-teal-700 dark:text-teal-300 text-xs space-y-1">
                <li>• INEGI (estadísticas nacionales)</li>
                <li>• CONAGUA (clima y agua)</li>
                <li>• Banxico (economía)</li>
                <li>• CONAPO (población)</li>
                <li>• SSA (salud)</li>
                <li>• SCT (transporte)</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <h5 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🌐 Bases de Datos</h5>
              <ul className="text-indigo-700 dark:text-indigo-300 text-xs space-y-1">
                <li>• Data México</li>
                <li>• Portal de Datos Abiertos</li>
                <li>• Google Public Data</li>
                <li>• World Bank Open Data</li>
                <li>• Our World in Data</li>
              </ul>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900 p-4 rounded-lg">
              <h5 className="font-bold text-pink-800 dark:text-pink-200 mb-2">🔬 Datos Propios</h5>
              <ul className="text-pink-700 dark:text-pink-300 text-xs space-y-1">
                <li>• Experimentos controlados</li>
                <li>• Encuestas estructuradas</li>
                <li>• Mediciones sistemáticas</li>
                <li>• Observaciones periódicas</li>
                <li>• Registros personales</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "⚙️ Análisis Exploratorio y Selección del Modelo",
      contenido: (
        <div className="space-y-6">
          <div className="bg-cyan-50 dark:bg-cyan-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-cyan-800 dark:text-cyan-200 mb-4">
              🔍 Antes de Elegir el Modelo: Conoce tus Datos
            </h3>
            <p className="text-cyan-700 dark:text-cyan-300">
              No elijas el modelo al azar. Los datos te dirán qué función necesitas. Aprende a "leer" tus datos para tomar la mejor decisión.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">📊 Paso 1: Grafica tus Datos</h4>
              <div className="text-green-700 dark:text-green-300 space-y-3">
                <p><strong>Herramientas recomendadas:</strong></p>
                <ul className="text-sm space-y-1">
                  <li>• Excel o Google Sheets (gráfico de dispersión)</li>
                  <li>• GeoGebra (gratuito, potente)</li>
                  <li>• Calculadora gráfica</li>
                  <li>• Papel milimétrico (método tradicional)</li>
                </ul>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>¿Qué buscar?</strong><br/>
                  <span className="text-sm">Patrones, tendencias, comportamientos repetitivos, valores extremos</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900 p-5 rounded-lg">
              <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">🎯 Paso 2: Identifica el Patrón</h4>
              <div className="text-amber-700 dark:text-amber-300 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <strong>Línea recta</strong><br/>→ Función lineal
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <strong>Curva suave</strong><br/>→ Función cuadrática
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <strong>Crecimiento rápido</strong><br/>→ Función exponencial
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <strong>Ondas repetitivas</strong><br/>→ Función trigonométrica
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <strong>Crecimiento que se frena</strong><br/>→ Función logarítmica
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded">
                    <strong>Patrón complejo</strong><br/>→ Función combinada
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg">
            <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">🧮 Paso 3: Prueba de Hipótesis Matemática</h4>
            <div className="text-blue-700 dark:text-blue-300">
              <p className="mb-3">Una vez que identifiques el patrón visual, confirma matemáticamente:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Para función lineal:</strong><br/>
                  <span className="text-sm">Calcula Δy/Δx entre puntos consecutivos. Si es aproximadamente constante → es lineal</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Para función exponencial:</strong><br/>
                  <span className="text-sm">Calcula y(n+1)/y(n). Si el ratio es aproximadamente constante → es exponencial</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Para función trigonométrica:</strong><br/>
                  <span className="text-sm">Busca período repetitivo. Si los valores se repiten a intervalos regulares → es periódica</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Para función cuadrática:</strong><br/>
                  <span className="text-sm">Calcula segundas diferencias Δ²y. Si son aproximadamente constantes → es cuadrática</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900 p-5 rounded-lg">
            <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">⚖️ Paso 4: Criterios de Selección Final</h4>
            <div className="text-red-700 dark:text-red-300 space-y-3">
              <p><strong>Evalúa cada opción considerando:</strong></p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <strong className="text-red-600 dark:text-red-400">Ajuste Visual</strong><br/>
                  <span className="text-xs">¿La curva pasa cerca de la mayoría de puntos?</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <strong className="text-red-600 dark:text-red-400">Simplicidad</strong><br/>
                  <span className="text-xs">¿Es el modelo más simple que funciona?</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                  <strong className="text-red-600 dark:text-red-400">Interpretabilidad</strong><br/>
                  <span className="text-xs">¿Puedes explicar por qué tiene sentido físico?</span>
                </div>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded">
                <strong>Regla de oro:</strong> Cuando dudes entre dos modelos, elige el más simple que explique al menos el 85% de la variación en tus datos.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🔧 Ajuste de Parámetros y Optimización",
      contenido: (
        <div className="space-y-6">
          <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">
              ⚙️ Ajustando tu Modelo a la Perfección
            </h3>
            <p className="text-indigo-700 dark:text-indigo-300">
              Ya elegiste el tipo de función, ahora necesitas encontrar los valores exactos de los parámetros para que tu modelo se ajuste lo mejor posible a tus datos.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">🎯 Estrategias de Ajuste por Tipo de Función</h4>
            <div className="space-y-4">
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                <h5 className="font-bold text-green-600 dark:text-green-400 mb-2">Función Lineal: f(x) = mx + b</h5>
                <div className="text-gray-700 dark:text-gray-300 text-sm">
                  <p><strong>Método analítico:</strong> m = (y₂-y₁)/(x₂-x₁), b = y₁ - mx₁</p>
                  <p><strong>Interpretación física:</strong> m = tasa de cambio, b = valor inicial</p>
                  <p><strong>Tip:</strong> Usa los puntos más separados para reducir error en la pendiente</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Función Exponencial: f(x) = ab^x</h5>
                <div className="text-gray-700 dark:text-gray-300 text-sm">
                  <p><strong>Método:</strong> Linearizar con logaritmos: ln(y) = ln(a) + x·ln(b)</p>
                  <p><strong>Interpretación física:</strong> a = valor inicial, b = factor de crecimiento</p>
                  <p><strong>Tip:</strong> Si b > 1 es crecimiento, si 0 &lt; b &lt; 1 es decaimiento</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-red-500">
                <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">Función Cuadrática: f(x) = ax² + bx + c</h5>
                <div className="text-gray-700 dark:text-gray-300 text-sm">
                  <p><strong>Método:</strong> Sistema de 3 ecuaciones con 3 puntos</p>
                  <p><strong>Interpretación física:</strong> a = curvatura, vértice en x = -b/(2a)</p>
                  <p><strong>Tip:</strong> Elige puntos equidistantes para mejor estabilidad numérica</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-500">
                <h5 className="font-bold text-orange-600 dark:text-orange-400 mb-2">Función Trigonométrica: f(x) = A·sen(B(x-C)) + D</h5>
                <div className="text-gray-700 dark:text-gray-300 text-sm">
                  <p><strong>Parámetros:</strong> A = amplitud, B = 2π/período, C = desfase, D = desplazamiento vertical</p>
                  <p><strong>Método:</strong> D = promedio de datos, A = (máximo-mínimo)/2, período por inspección</p>
                  <p><strong>Tip:</strong> Identifica primero el período observando cuándo se repite el patrón</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">🧮 Herramientas de Cálculo</h4>
              <div className="text-green-700 dark:text-green-300 space-y-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Excel/Sheets:</strong><br/>
                  <span className="text-xs">Función LINEST(), líneas de tendencia, R²</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>GeoGebra:</strong><br/>
                  <span className="text-xs">Comando Regresión(), ajuste visual interactivo</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Calculadora científica:</strong><br/>
                  <span className="text-xs">Modo regresión, múltiples tipos de ajuste</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Método manual:</strong><br/>
                  <span className="text-xs">Sistema de ecuaciones, método de mínimos cuadrados</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg">
              <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">📊 Evaluando la Calidad del Ajuste</h4>
              <div className="text-yellow-700 dark:text-yellow-300 space-y-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Coeficiente R²:</strong><br/>
                  <span className="text-xs">R² &gt; 0.9: Excelente, R² &gt; 0.7: Bueno, R² &lt; 0.5: Revisar modelo</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Análisis de residuos:</strong><br/>
                  <span className="text-xs">Diferencias entre datos reales y modelo. Deben ser pequeñas y aleatorias</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Validación cruzada:</strong><br/>
                  <span className="text-xs">Usar 80% de datos para ajustar, 20% para validar predicciones</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900 p-5 rounded-lg">
            <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3">🎛️ Ejemplo de Proceso de Ajuste</h4>
            <div className="text-teal-700 dark:text-teal-300">
              <div className="bg-white dark:bg-gray-800 p-4 rounded font-mono text-sm">
                <strong>Caso: Temperatura en Chetumal (trigonométrica)</strong><br/><br/>
                <strong>Paso 1:</strong> Identificar parámetros visuales<br/>
                - Valor máximo: 30°C (mayo)<br/>
                - Valor mínimo: 22°C (enero)<br/>
                - Período: 12 meses<br/><br/>
                <strong>Paso 2:</strong> Calcular parámetros<br/>
                - D = (30 + 22)/2 = 26°C (promedio)<br/>
                - A = (30 - 22)/2 = 4°C (amplitud)<br/>
                - B = 2π/12 = π/6 (frecuencia)<br/>
                - C = 5 meses (desfase, máximo en mayo)<br/><br/>
                <strong>Resultado:</strong> T(t) = 4·sen(π/6(t-5)) + 26<br/><br/>
                <strong>Paso 3:</strong> Verificar ajuste<br/>
                - T(1) = 24.5°C vs real 23°C ✓<br/>
                - T(5) = 30°C vs real 30°C ✓<br/>
                - R² = 0.89 (buen ajuste)
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "📐 Cálculo de Derivadas e Interpretación Física",
      contenido: (
        <div className="space-y-6">
          <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">
              🧮 La Derivada: El Corazón Matemático de tu Proyecto
            </h3>
            <p className="text-red-700 dark:text-red-300">
              Una vez que tienes tu modelo ajustado, es momento de la parte más importante: calcular la derivada e interpretar qué nos dice sobre el fenómeno real.
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900 p-5 rounded-lg">
            <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">🎯 ¿Por Qué es Tan Importante la Derivada?</h4>
            <div className="text-amber-700 dark:text-amber-300 grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <strong>Tasa de Cambio</strong><br/>
                <span className="text-xs">¿Qué tan rápido cambia el fenómeno?</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <strong>Puntos Críticos</strong><br/>
                <span className="text-xs">¿Dónde ocurren máximos y mínimos?</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-center">
                <strong>Comportamiento</strong><br/>
                <span className="text-xs">¿Cuándo crece, decrece o se mantiene?</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Función Lineal: f(x) = mx + b</h5>
              <div className="text-blue-700 dark:text-blue-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Derivada:</strong> f&apos;(x) = m<br/>
                    <strong>Interpretación:</strong> Tasa de cambio constante<br/>
                    <strong>Ejemplo:</strong> Si f(x) = velocidad, entonces f&apos;(x) = aceleración constante
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    Ejemplo: Ahorro mensual<br/>
                    S(t) = 500t + 1000<br/>
                    S'(t) = 500<br/>
                    <em>Ahorras $500/mes constantemente</em>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-green-800 dark:text-green-200 mb-3">Función Cuadrática: f(x) = ax² + bx + c</h5>
              <div className="text-green-700 dark:text-green-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Derivada:</strong> f&apos;(x) = 2ax + b<br/>
                    <strong>Interpretación:</strong> Tasa de cambio variable (aceleración)<br/>
                    <strong>Punto crítico:</strong> x = -b/(2a)
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    Ejemplo: Trayectoria de pelota<br/>
                    h(t) = -5t² + 20t + 1<br/>
                    h'(t) = -10t + 20<br/>
                    <em>Velocidad vertical cambia -10 m/s²</em><br/>
                    <em>Máximo en t = 2s</em>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Función Exponencial: f(x) = ab^x</h5>
              <div className="text-purple-700 dark:text-purple-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Derivada:</strong> f&apos;(x) = ab^x · ln(b)<br/>
                    <strong>Interpretación:</strong> Tasa proporcional al valor actual<br/>
                    <strong>Característica:</strong> Crecimiento acelerado
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    Ejemplo: Población bacteriana<br/>
                    P(t) = 100 · (1.5)^t<br/>
                    P'(t) = 100 · (1.5)^t · ln(1.5)<br/>
                    <em>La tasa de crecimiento es proporcional a la población actual</em>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900 p-5 rounded-lg border-l-4 border-orange-500">
              <h5 className="font-bold text-orange-800 dark:text-orange-200 mb-3">Función Trigonométrica: f(x) = A·sen(B(x-C)) + D</h5>
              <div className="text-orange-700 dark:text-orange-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Derivada:</strong> f&apos;(x) = AB·cos(B(x-C))<br/>
                    <strong>Interpretación:</strong> Tasa oscila periódicamente<br/>
                    <strong>Máxima tasa:</strong> |AB| cuando cos = ±1
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    Ejemplo: Temperatura diaria<br/>
                    T(t) = 5·sen(π(t-6)/12) + 25<br/>
                    T'(t) = 5π/12·cos(π(t-6)/12)<br/>
                    <em>Temperatura cambia más rápido a las 12:00 y 00:00</em>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900 p-5 rounded-lg">
            <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">🔍 Análisis Completo de la Derivada</h4>
            <div className="text-indigo-700 dark:text-indigo-300 space-y-3">
              <p><strong>Tu análisis debe incluir:</strong></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-indigo-600 dark:text-indigo-400">Análisis Algebraico:</strong>
                  <ul className="text-sm space-y-1">
                    <li>• Fórmula de la derivada</li>
                    <li>• Puntos donde f&apos;(x) = 0</li>
                    <li>• Intervalos donde f&apos;(x) &gt; 0 y f&apos;(x) &lt; 0</li>
                    <li>• Valores máximo y mínimo de f&apos;(x)</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-indigo-600 dark:text-indigo-400">Interpretación Física:</strong>
                  <ul className="text-sm space-y-1">
                    <li>• ¿Qué representa f&apos;(x) en tu contexto?</li>
                    <li>• ¿Cuándo el fenómeno cambia más rápido?</li>
                    <li>• ¿Qué significan los máximos y mínimos?</li>
                    <li>• ¿Cómo se relaciona con el fenómeno real?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      titulo: "🎯 Validación, Interpretación y Presentación Final",
      contenido: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
              🏁 El Toque Final: De Matemáticas a Conocimiento Real
            </h3>
            <p className="text-green-700 dark:text-green-300">
              Ya tienes tu modelo y sus derivadas calculadas. Ahora viene la parte más importante: <strong>validar tu modelo</strong>, interpretar los resultados en el contexto real, y comunicar tus descubrimientos de forma clara y convincente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg">
              <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">✅ Validación del Modelo</h4>
              <div className="text-yellow-700 dark:text-yellow-300 space-y-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Precisión cuantitativa:</strong><br/>
                  <span className="text-xs">Calcula el error promedio entre predicciones y datos reales</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Coherencia física:</strong><br/>
                  <span className="text-xs">¿Los resultados tienen sentido en el mundo real?</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Rango de validez:</strong><br/>
                  <span className="text-xs">¿Para qué valores de x tu modelo es confiable?</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Predicciones verificables:</strong><br/>
                  <span className="text-xs">Haz predicciones que puedas comprobar después</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-5 rounded-lg">
              <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">⚠️ Limitaciones y Advertencias</h4>
              <div className="text-red-700 dark:text-red-300 space-y-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Limitaciones del modelo:</strong><br/>
                  <span className="text-xs">¿Qué aspectos del fenómeno NO captura tu modelo?</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Calidad de los datos:</strong><br/>
                  <span className="text-xs">¿Qué tan confiables son tus fuentes?</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Supuestos implícitos:</strong><br/>
                  <span className="text-xs">¿Qué condiciones asumes que permanecen constantes?</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Extrapolación cautelosa:</strong><br/>
                  <span className="text-xs">¿Hasta dónde es seguro usar tu modelo para predecir?</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">📊 Estructura del Reporte Final</h4>
            <div className="text-purple-700 dark:text-purple-300">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>1. Introducción (10%)</strong>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Planteamiento del problema</li>
                      <li>• Hipótesis inicial</li>
                      <li>• Objetivos del estudio</li>
                    </ul>
                    
                    <strong className="mt-3 block">2. Metodología (15%)</strong>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Fuentes de datos</li>
                      <li>• Proceso de recopilación</li>
                      <li>• Herramientas utilizadas</li>
                    </ul>
                    
                    <strong className="mt-3 block">3. Análisis de Datos (20%)</strong>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Gráficos y tablas</li>
                      <li>• Selección del modelo</li>
                      <li>• Justificación matemática</li>
                    </ul>
                  </div>
                  <div>
                    <strong>4. Modelo Matemático (25%)</strong>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Función ajustada</li>
                      <li>• Cálculo de derivadas</li>
                      <li>• Análisis de puntos críticos</li>
                    </ul>
                    
                    <strong className="mt-3 block">5. Interpretación (20%)</strong>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Significado físico</li>
                      <li>• Implicaciones prácticas</li>
                      <li>• Aplicaciones potenciales</li>
                    </ul>
                    
                    <strong className="mt-3 block">6. Conclusiones (10%)</strong>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Resumen de hallazgos</li>
                      <li>• Limitaciones</li>
                      <li>• Trabajo futuro</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900 p-5 rounded-lg">
            <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3">🎤 Preparando tu Presentación Oral</h4>
            <div className="text-teal-700 dark:text-teal-300 space-y-3">
              <p><strong>Estructura recomendada (10 minutos + 5 de preguntas):</strong></p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong className="text-teal-600 dark:text-teal-400">Introducción (2 min)</strong><br/>
                  <span className="text-xs">• ¿Qué fenómeno estudié?<br/>• ¿Por qué es importante?<br/>• ¿Cuál era mi hipótesis?</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong className="text-teal-600 dark:text-teal-400">Desarrollo (6 min)</strong><br/>
                  <span className="text-xs">• Mostrar datos y gráficos<br/>• Explicar modelo elegido<br/>• Presentar derivadas</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <strong className="text-teal-600 dark:text-teal-400">Conclusiones (2 min)</strong><br/>
                  <span className="text-xs">• ¿Qué descubrí?<br/>• ¿Qué aplicaciones tiene?<br/>• ¿Qué aprendí?</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900 p-5 rounded-lg">
            <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">🌟 Elevando tu Proyecto al Siguiente Nivel</h4>
            <div className="text-indigo-700 dark:text-indigo-300 space-y-3">
              <p><strong>Para destacar, incluye:</strong></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-indigo-600 dark:text-indigo-400">Aspectos Técnicos Avanzados:</strong>
                  <ul className="text-sm space-y-1">
                    <li>• Análisis de sensibilidad de parámetros</li>
                    <li>• Comparación con modelos alternativos</li>
                    <li>• Intervalos de confianza</li>
                    <li>• Validación cruzada rigurosa</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-indigo-600 dark:text-indigo-400">Valor Agregado:</strong>
                  <ul className="text-sm space-y-1">
                    <li>• Conexión con problemáticas locales</li>
                    <li>• Propuestas de mejora o solución</li>
                    <li>• Impacto social o económico</li>
                    <li>• Extensiones del trabajo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900 p-5 rounded-lg">
            <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">🎯 ¡Es Tu Momento de Brillar!</h4>
            <p className="text-green-700 dark:text-green-300 text-lg">
              <strong>¡Felicidades!</strong> Has completado todas las fases del proyecto integrador. Ahora tienes en tus manos un trabajo de investigación matemática riguroso que demuestra tu crecimiento durante todo el semestre. 
            </p>
            <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded mt-3">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                Recuerda: Tu proyecto no es solo una tarea escolar, es evidencia de que puedes usar las matemáticas para entender y explicar el mundo real. ¡Eso es el verdadero poder de las matemáticas! 🌟
              </p>
            </div>
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
                Asesoría de Desarrollo - Progresión 14
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
              🛠️ Asesoría de Desarrollo del Proyecto Final
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
                      : 'bg-blue-500 text-white hover:bg-blue-600'
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
                          ? 'bg-blue-500 text-white'
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
                      : 'bg-blue-500 text-white hover:bg-blue-600'
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

export default AsesoriaProyectoFinal;