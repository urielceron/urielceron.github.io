import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const AplicacionesPracticas = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [aplicacionesDocumentadas, setAplicacionesDocumentadas] = useState([]);
  const [presentacionActual, setPresentacionActual] = useState({
    titulo: '',
    problema: '',
    geometriaSeleccionada: '',
    justificacion: '',
    resultados: '',
    conclusiones: ''
  });

  // Casos de aplicación predefinidos
  const casosAplicacion = [
    {
      id: 'urbano-delivery',
      titulo: 'Optimización de Rutas de Entrega Urbana',
      categoria: 'Logística',
      geometria: 'Taxista',
      problema: 'Una empresa de delivery necesita optimizar las rutas de sus repartidores en el centro de la ciudad.',
      contexto: 'Ciudad con calles cuadriculadas, tráfico controlado, múltiples destinos por ruta',
      solucion: 'Aplicar geometría del taxista para calcular distancias reales y optimizar secuencias de entrega',
      beneficios: ['Reducción de tiempo de entrega', 'Menor consumo de combustible', 'Mayor eficiencia operativa'],
      implementacion: 'Algoritmo basado en distancia Manhattan integrado en app móvil'
    },
    {
      id: 'aereo-internacional',
      titulo: 'Planificación de Rutas Aéreas Intercontinentales',
      categoria: 'Aviación',
      geometria: 'Esférica',
      problema: 'Aerolínea debe planificar rutas eficientes entre continentes minimizando distancia y combustible.',
      contexto: 'Vuelos de larga distancia, consideraciones de curvatura terrestre, regulaciones aéreas',
      solucion: 'Usar geometría esférica para calcular geodésicas y rutas de círculo máximo',
      beneficios: ['Ahorro significativo de combustible', 'Reducción de tiempo de vuelo', 'Menor huella de carbono'],
      implementacion: 'Sistema de navegación GPS con cálculos de geodésicas en tiempo real'
    },
    {
      id: 'infraestructura-cable',
      titulo: 'Tendido de Fibra Óptica entre Ciudades',
      categoria: 'Telecomunicaciones',
      geometria: 'Euclidiana',
      problema: 'Empresa de telecomunicaciones necesita tender fibra óptica entre dos ciudades de manera directa.',
      contexto: 'Terreno relativamente plano, presupuesto limitado, necesidad de menor latencia',
      solucion: 'Aplicar geometría euclidiana para calcular la ruta más directa posible',
      beneficios: ['Menor costo de instalación', 'Latencia mínima', 'Mantenimiento simplificado'],
      implementacion: 'Sistema GIS con cálculos de línea recta y análisis de obstáculos'
    },
    {
      id: 'urbano-emergencias',
      titulo: 'Sistema de Respuesta de Emergencias Urbanas',
      categoria: 'Servicios Públicos',
      geometria: 'Taxista',
      problema: 'Optimizar tiempo de respuesta de ambulancias en zona urbana densamente poblada.',
      contexto: 'Red de calles compleja, tráfico variable, múltiples hospitales y estaciones',
      solucion: 'Combinar geometría del taxista con datos de tráfico en tiempo real',
      beneficios: ['Respuesta más rápida', 'Mejor asignación de recursos', 'Vidas salvadas'],
      implementacion: 'Sistema integrado con GPS, datos de tráfico y algoritmos de optimización'
    },
    {
      id: 'maritimo-comercial',
      titulo: 'Optimización de Rutas Marítimas Comerciales',
      categoria: 'Transporte Marítimo',
      geometria: 'Esférica',
      problema: 'Naviera necesita optimizar rutas comerciales considerando corrientes, clima y distancia.',
      contexto: 'Rutas transoceánicas, factores meteorológicos, eficiencia de combustible',
      solucion: 'Aplicar geometría esférica considerando factores adicionales como corrientes marinas',
      beneficios: ['Reducción de costos operativos', 'Menor tiempo de tránsito', 'Eficiencia energética'],
      implementacion: 'Sistema de navegación integrado con datos meteorológicos y oceanográficos'
    },
    {
      id: 'smart-city',
      titulo: 'Planificación de Smart City con IoT',
      categoria: 'Planificación Urbana',
      geometria: 'Taxista + Euclidiana',
      problema: 'Diseñar red de sensores IoT optimizando cobertura y conectividad en ciudad inteligente.',
      contexto: 'Red de sensores distribuidos, comunicación entre dispositivos, cobertura total',
      solucion: 'Combinar geometría del taxista para rutas de mantenimiento y euclidiana para cobertura de señal',
      beneficios: ['Cobertura optimizada', 'Mantenimiento eficiente', 'Conectividad mejorada'],
      implementacion: 'Algoritmos híbridos en plataforma de gestión urbana'
    }
  ];

  const agregarAplicacion = (caso) => {
    const nuevaAplicacion = {
      id: Date.now(),
      ...caso,
      fechaDocumentacion: new Date().toLocaleDateString(),
      estado: 'documentada'
    };
    setAplicacionesDocumentadas([...aplicacionesDocumentadas, nuevaAplicacion]);
  };

  const eliminarAplicacion = (id) => {
    setAplicacionesDocumentadas(aplicacionesDocumentadas.filter(app => app.id !== id));
  };

  const estructurasPresentacion = [
    {
      nombre: 'Análisis de Problema',
      tiempo: '3-4 minutos',
      contenido: [
        'Descripción clara del problema o situación',
        'Contexto y restricciones específicas',
        'Importancia y relevancia del caso',
        'Objetivos que se buscan alcanzar'
      ]
    },
    {
      nombre: 'Justificación de Geometría',
      tiempo: '2-3 minutos',
      contenido: [
        'Comparación entre las 3 geometrías estudiadas',
        'Razones específicas para la selección',
        'Ventajas sobre las alternativas',
        'Limitaciones reconocidas'
      ]
    },
    {
      nombre: 'Implementación y Resultados',
      tiempo: '3-4 minutos',
      contenido: [
        'Cálculos y mediciones específicas',
        'Visualizaciones o demostraciones',
        'Comparación con métodos alternativos',
        'Beneficios cuantificados'
      ]
    },
    {
      nombre: 'Conclusiones y Aplicabilidad',
      tiempo: '2 minutos',
      contenido: [
        'Lecciones aprendidas principales',
        'Aplicabilidad a otros contextos',
        'Recomendaciones finales',
        'Preguntas para la audiencia'
      ]
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
                Sesión 5: Integración y Aplicaciones Prácticas
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* SABER QUÉ - CONCEPTOS FUNDAMENTALES */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📚 Saber Qué: Conceptos de Integración y Aplicación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">
                    🔗 Integración de Conocimientos
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Síntesis:</strong> Proceso de combinar conceptos de diferentes geometrías para resolver problemas complejos.</p>
                    <p><strong>Comparación sistemática:</strong> Análisis estructurado de ventajas y desventajas de cada geometría según el contexto.</p>
                    <p><strong>Transferencia de aprendizaje:</strong> Aplicación de conceptos matemáticos a situaciones reales y prácticas.</p>
                    <p><strong>Pensamiento crítico:</strong> Evaluación de la efectividad de diferentes enfoques geométricos.</p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">
                    🎯 Criterios de Aplicación
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Pertinencia:</strong> La geometría debe ser apropiada para el contexto específico del problema.</p>
                    <p><strong>Eficiencia:</strong> Debe proporcionar la solución más efectiva en términos de recursos y tiempo.</p>
                    <p><strong>Precisión:</strong> Debe ofrecer el nivel de exactitud requerido para la aplicación.</p>
                    <p><strong>Implementabilidad:</strong> Debe ser factible de implementar con la tecnología disponible.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">
                    📊 Matriz de Decisión para Geometrías
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse border">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-600">
                          <th className="border p-1">Contexto</th>
                          <th className="border p-1">Euclidiana</th>
                          <th className="border p-1">Taxista</th>
                          <th className="border p-1">Esférica</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        <tr>
                          <td className="border p-1 font-semibold">Navegación urbana</td>
                          <td className="border p-1">⭐⭐</td>
                          <td className="border p-1">⭐⭐⭐⭐⭐</td>
                          <td className="border p-1">⭐</td>
                        </tr>
                        <tr>
                          <td className="border p-1 font-semibold">Rutas aéreas</td>
                          <td className="border p-1">⭐</td>
                          <td className="border p-1">⭐</td>
                          <td className="border p-1">⭐⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                          <td className="border p-1 font-semibold">Tendido directo</td>
                          <td className="border p-1">⭐⭐⭐⭐⭐</td>
                          <td className="border p-1">⭐⭐</td>
                          <td className="border p-1">⭐</td>
                        </tr>
                        <tr>
                          <td className="border p-1 font-semibold">Cobertura de señal</td>
                          <td className="border p-1">⭐⭐⭐⭐</td>
                          <td className="border p-1">⭐⭐</td>
                          <td className="border p-1">⭐⭐⭐</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-yellow-700 dark:text-yellow-300">
                    🏗️ Principios de Presentación Efectiva
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Claridad:</strong> Mensaje principal fácil de entender</p>
                    <p><strong>Estructura:</strong> Organización lógica del contenido</p>
                    <p><strong>Evidencia:</strong> Datos y cálculos que respalden las conclusiones</p>
                    <p><strong>Relevancia:</strong> Conexión clara con aplicaciones reales</p>
                    <p><strong>Interacción:</strong> Capacidad de responder preguntas</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SABER CÓMO - METODOLOGÍA Y PROCEDIMIENTOS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🔧 Saber Cómo: Metodología de Integración y Documentación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">🗂️ Proceso de Integración de Análisis (Paso a Paso)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Fase 1: Recopilación (10 min)</h5>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Reunir todos los datos de sesiones anteriores</li>
                    <li>Organizar tablas de mediciones por geometría</li>
                    <li>Compilar observaciones y reflexiones</li>
                    <li>Identificar patrones consistentes</li>
                  </ol>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Fase 2: Análisis (15 min)</h5>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Comparar eficiencias entre geometrías</li>
                    <li>Identificar contextos óptimos para cada una</li>
                    <li>Calcular beneficios cuantitativos</li>
                    <li>Documentar limitaciones observadas</li>
                  </ol>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Fase 3: Síntesis (20 min)</h5>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Crear matriz de decisión personalizada</li>
                    <li>Desarrollar recomendaciones específicas</li>
                    <li>Preparar casos de aplicación real</li>
                    <li>Formular conclusiones integradas</li>
                  </ol>
                </div>

              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">📋 Template de Documentación</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>1. Identificación del Problema</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Descripción detallada</li>
                    <li>Contexto específico</li>
                    <li>Restricciones existentes</li>
                  </ul>

                  <p><strong>2. Análisis de Opciones</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Geometrías evaluadas</li>
                    <li>Criterios de comparación</li>
                    <li>Resultados cuantitativos</li>
                  </ul>

                  <p><strong>3. Solución Propuesta</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Geometría seleccionada</li>
                    <li>Justificación técnica</li>
                    <li>Plan de implementación</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">🎨 Técnicas de Visualización</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Gráficos Comparativos:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Barras para comparar eficiencias</li>
                    <li>Tablas para datos numéricos</li>
                    <li>Mapas conceptuales para relaciones</li>
                  </ul>

                  <p><strong>Demostraciones Visuales:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Capturas de herramientas interactivas</li>
                    <li>Diagramas de rutas</li>
                    <li>Esquemas de implementación</li>
                  </ul>

                  <p><strong>Casos Prácticos:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Ejemplos reales documentados</li>
                    <li>Antes/después de la optimización</li>
                    <li>Beneficios cuantificados</li>
                  </ul>
                </div>
              </div>


            </div>
          </CardContent>
        </Card>

        {/* CASOS DE APLICACIÓN PRÁCTICA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🌟 Casos de Aplicación Práctica Real
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">💡 Selecciona casos para documentar en tu presentación</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Elige al menos 2 casos diferentes para demostrar la versatilidad de las geometrías estudiadas.
                Cada caso incluye contexto real, datos específicos y resultados cuantificables.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {casosAplicacion.map((caso, index) => (
                <div key={caso.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="font-semibold text-lg text-gray-900 dark:text-white">{caso.titulo}</h5>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                          {caso.categoria}
                        </span>
                        <span className="text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                          Geometría {caso.geometria}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => agregarAplicacion(caso)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      + Documentar
                    </button>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p><strong>Problema:</strong> {caso.problema}</p>
                    </div>

                    <div>
                      <p><strong>Contexto:</strong> {caso.contexto}</p>
                    </div>

                    <div>
                      <p><strong>Solución:</strong> {caso.solucion}</p>
                    </div>

                    <div>
                      <p><strong>Beneficios:</strong></p>
                      <ul className="list-disc pl-4 mt-1">
                        {caso.beneficios.map((beneficio, idx) => (
                          <li key={idx}>{beneficio}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-600 p-2 rounded">
                      <p><strong>Implementación:</strong> {caso.implementacion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* APLICACIONES DOCUMENTADAS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📋 Aplicaciones Documentadas para Presentación
            </CardTitle>
          </CardHeader>
          <CardContent>
            {aplicacionesDocumentadas.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No hay aplicaciones documentadas. Selecciona casos de la sección anterior.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {aplicacionesDocumentadas.map((app) => (
                  <div key={app.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-lg">{app.titulo}</h5>
                      <button
                        onClick={() => eliminarAplicacion(app.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        🗑️
                      </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p><strong>Geometría:</strong> {app.geometria}</p>
                        <p><strong>Categoría:</strong> {app.categoria}</p>
                        <p><strong>Documentado:</strong> {app.fechaDocumentacion}</p>
                      </div>
                      <div>
                        <p><strong>Beneficios Principales:</strong></p>
                        <ul className="list-disc pl-4">
                          {app.beneficios.slice(0, 2).map((beneficio, idx) => (
                            <li key={idx}>{beneficio}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900 p-2 rounded">
                        <p><strong>Estado:</strong> ✅ Listo para presentación</p>
                        <p className="text-xs mt-1">Incluir en la sección de casos prácticos</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* CONTRIBUCIÓN AL PROYECTO FINAL */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📄 Contribución al Proyecto Final: Documentación de Aplicaciones (15%)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">📋 Sobre esta Sección del Proyecto</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Esta actividad genera el contenido para la <strong>Sección 5: Aplicaciones Prácticas y Conclusiones</strong>
                del proyecto integrado "Introducción a Geometrías no Euclidianas: Del Taxi a la Esfera", consolidando
                todo el aprendizaje de la progresión en aplicaciones reales.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">📊 Sección 5: Aplicaciones Prácticas y Conclusiones (15% del Proyecto Total)</h4>

              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold mb-3 text-lg">5.1 Síntesis del Análisis Comparativo (4 puntos)</h5>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Tablas de las sesiones:</strong> Consolidación de todos los datos de sesiones 1-4</li>
                    <li><strong>Patrones identificados:</strong> Tendencias consistentes observadas a través del estudio</li>
                    <li><strong>Matriz de decisión final:</strong> Guía práctica para seleccionar geometrías euclidiana, taxista, y esferica</li>
                    <li><strong>Conclusiones principales:</strong> 3-5 hallazgos clave del estudio completo</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 rounded">
                  <h6 className="font-semibold mb-2">📋 Checklist de Entrega:</h6>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Evidencias Obligatorias:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>☐ Tabla de las sesiones con datos integrados</li>
                        <li>☐ 2 casos completamente documentados (pueden ser los mismos de la sesión 4 *casos libres</li>
                        <li>☐ Matriz de decisión personalizada</li>
                        <li>☐ Reflexión personal documentada</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Formato y Calidad:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>☐ Máximo 3 páginas para esta sección</li>
                        <li>☐ Integración con secciones anteriores</li>
                        <li>☐ Redacción clara y profesional</li>
                        <li>☐ Evidencias visuales incluidas</li>
                        <li>☐ Preparación para exposición oral</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-800 rounded">
                  <h6 className="font-semibold mb-2">💡 Consejos para la Excelencia:</h6>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Demostrar comprensión profunda conectando conceptos de todas las sesiones</li>
                    <li>Usar datos reales y específicos en lugar de generalizaciones</li>
                    <li>Mostrar pensamiento crítico evaluando limitaciones y alternativas</li>
                    <li>Preparar material que pueda ser presentado efectivamente en 10 minutos</li>
                    <li>Documentar el proceso de aprendizaje, no solo los resultados finales</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default AplicacionesPracticas;