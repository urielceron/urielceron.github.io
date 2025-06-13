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
                <div>
                  <h5 className="font-semibold mb-2">Fase 4: Presentación (15 min)</h5>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Estructurar presentación de 10 minutos</li>
                    <li>Preparar materiales visuales</li>
                    <li>Ensayar con tiempo controlado</li>
                    <li>Anticipar preguntas frecuentes</li>
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

              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">📢 Estructura de Presentación</h4>
                <div className="space-y-2 text-sm">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <p><strong>Introducción (1 min)</strong></p>
                    <p>Presentación del problema y objetivos</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-3">
                    <p><strong>Análisis (4 min)</strong></p>
                    <p>Comparación de geometrías y datos</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-3">
                    <p><strong>Solución (3 min)</strong></p>
                    <p>Propuesta y justificación</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-3">
                    <p><strong>Conclusiones (2 min)</strong></p>
                    <p>Resultados y aplicabilidad</p>
                  </div>
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

        {/* SABER HACER - ACTIVIDADES PRÁCTICAS */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              🎯 Saber Hacer: Actividades Prácticas de Integración - 60 minutos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">📊 Actividad 1: Consolidación de Análisis Comparativo (20 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Integrar todos los datos recolectados en las sesiones anteriores en un análisis unificado</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Pasos a seguir:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li><strong>Recopilación (5 min):</strong> Reunir todas las tablas y mediciones de sesiones 1-4</li>
                    <li><strong>Organización (5 min):</strong> Crear tabla maestra con todos los datos comparativos</li>
                    <li><strong>Análisis de patrones (5 min):</strong> Identificar tendencias y conclusiones consistentes</li>
                    <li><strong>Síntesis (5 min):</strong> Redactar 3 conclusiones principales del estudio completo</li>
                  </ol>

                  <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-800 rounded">
                    <p><strong>Entregable:</strong> Tabla comparativa integrada con conclusiones documentadas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">🎨 Actividad 2: Preparación de Materiales de Presentación (15 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Crear visualizaciones efectivas y material de apoyo para la presentación final</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Tareas específicas:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li><strong>Gráfico comparativo (4 min):</strong> Crear gráfico de barras con eficiencias por geometría</li>
                    <li><strong>Matriz de decisión (4 min):</strong> Completar tabla de cuándo usar cada geometría</li>
                    <li><strong>Capturas de evidencia (4 min):</strong> Seleccionar mejores imágenes de herramientas usadas</li>
                    <li><strong>Lista de verificación (3 min):</strong> Preparar checklist para la presentación</li>
                  </ol>

                  <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-800 rounded">
                    <p><strong>Entregable:</strong> Kit completo de materiales visuales listos para presentar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">🏗️ Actividad 3: Desarrollo de Casos de Aplicación (15 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Documentar aplicaciones prácticas reales usando la metodología aprendida</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Proceso por caso (7.5 min cada uno):</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li><strong>Selección:</strong> Elegir 2 casos de la biblioteca de aplicaciones</li>
                    <li><strong>Análisis:</strong> Aplicar la metodología de evaluación de geometrías</li>
                    <li><strong>Justificación:</strong> Documentar por qué es la mejor opción</li>
                    <li><strong>Cuantificación:</strong> Calcular beneficios específicos cuando sea posible</li>
                  </ol>

                  <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-800 rounded">
                    <p><strong>Entregable:</strong> 2 casos completamente documentados con análisis técnico</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">🎤 Actividad 4: Ensayo de Presentación (10 min)</h4>
              <div className="space-y-3">
                <p><strong>Objetivo:</strong> Practicar la presentación final con tiempo controlado y retroalimentación</p>
                <div className="bg-white dark:bg-gray-700 p-4 rounded">
                  <p><strong>Estructura del ensayo:</strong></p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li><strong>Preparación (2 min):</strong> Organizar materiales y revisar estructura</li>
                    <li><strong>Presentación completa (6 min):</strong> Exponer siguiendo la estructura de 10 minutos</li>
                    <li><strong>Autoevaluación (2 min):</strong> Identificar áreas de mejora y ajustes necesarios</li>
                  </ol>

                  <div className="mt-4 space-y-2">
                    <div className="p-3 bg-green-100 dark:bg-green-800 rounded">
                      <p><strong>Criterios de evaluación:</strong></p>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Claridad en la explicación de conceptos</li>
                        <li>Uso efectivo de evidencias y datos</li>
                        <li>Conexión lógica entre secciones</li>
                        <li>Manejo del tiempo asignado</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ESTRUCTURA DE PRESENTACIÓN DETALLADA */}
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              📋 Guía Detallada para la Presentación Final (10 minutos)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {estructurasPresentacion.map((seccion, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="font-semibold text-lg">{seccion.nombre}</h5>
                    <span className="text-sm bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                      {seccion.tiempo}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm">
                    {seccion.contenido.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900 rounded text-xs">
                    <strong>💡 Tip: </strong>
                    {index === 0 && "Capta la atención con un problema real y relevante"}
                    {index === 1 && "Usa datos específicos de tus mediciones anteriores"}
                    {index === 2 && "Incluye visualizaciones de las herramientas utilizadas"}
                    {index === 3 && "Conecta con aplicaciones futuras y haz preguntas"}
                  </div>
                </div>
              ))}
            </div>
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
                    <li><strong>Tabla maestra integrada:</strong> Consolidación de todos los datos de sesiones 1-4</li>
                    <li><strong>Patrones identificados:</strong> Tendencias consistentes observadas a través del estudio</li>
                    <li><strong>Matriz de decisión final:</strong> Guía práctica para seleccionar geometrías</li>
                    <li><strong>Conclusiones principales:</strong> 3-5 hallazgos clave del estudio completo</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3 text-lg">5.2 Casos de Aplicación Documentados (6 puntos)</h5>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded">
                    <p className="font-semibold mb-2">Documentación requerida para cada caso:</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold">Caso 1: [Título seleccionado]</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Descripción detallada del problema</li>
                          <li>Análisis de opciones geométricas</li>
                          <li>Justificación de la selección</li>
                          <li>Beneficios cuantificados</li>
                          <li>Plan de implementación</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Caso 2: [Título seleccionado]</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Análisis completo siguiendo metodología</li>
                          <li>Comparación con alternativas</li>
                          <li>Resultados esperados</li>
                          <li>Aplicabilidad a otros contextos</li>
                          <li>Lecciones aprendidas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-3 text-lg">5.3 Reflexión sobre el Aprendizaje (3 puntos)</h5>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Evolución del entendimiento:</strong> Cómo cambió la comprensión a lo largo de las sesiones</li>
                    <li><strong>Conexiones interdisciplinarias:</strong> Relaciones con otras áreas del conocimiento</li>
                    <li><strong>Aplicabilidad futura:</strong> Cómo usar estos conocimientos en el futuro</li>
                    <li><strong>Valoración personal:</strong> Aspectos más significativos del aprendizaje</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3 text-lg">5.4 Material de Presentación (2 puntos)</h5>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Visualizaciones efectivas:</strong> Gráficos, tablas y diagramas claros</li>
                    <li><strong>Estructura organizada:</strong> Presentación lógica y coherente</li>
                    <li><strong>Evidencias sólidas:</strong> Datos y cálculos que respalden las conclusiones</li>
                    <li><strong>Calidad de comunicación:</strong> Claridad y efectividad en la transmisión de ideas</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-800 rounded">
                <h6 className="font-semibold mb-2">🔗 Integración con el Proyecto Completo:</h6>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Culminación coherente:</strong> Esta sección debe cerrar de manera lógica todo el proyecto</li>
                  <li><strong>Referencias cruzadas:</strong> Conectar con todas las secciones anteriores</li>
                  <li><strong>Valor agregado:</strong> Demostrar cómo la integración genera valor adicional</li>
                  <li><strong>Preparación para presentación:</strong> Material listo para la exposición final</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 rounded">
                <h6 className="font-semibold mb-2">📋 Checklist de Entrega:</h6>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Evidencias Obligatorias:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>☐ Tabla maestra con datos integrados</li>
                      <li>☐ 2 casos completamente documentados</li>
                      <li>☐ Matriz de decisión personalizada</li>
                      <li>☐ Material visual para presentación</li>
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
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

export default AplicacionesPracticas;