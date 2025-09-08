import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Cpu, HardDrive, MemoryStick, Monitor, Smartphone, Gamepad2, AlertCircle, BookOpen, PlayCircle, Zap, Clock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Procesamiento = () => {
  const [procesoActivo, setProcesoActivo] = useState(null);
  const [animacionActiva, setAnimacionActiva] = useState(false);
  const [comparacionVisible, setComparacionVisible] = useState(false);

  const dispositivosComunes = [
    {
      nombre: "Tu Smartphone",
      procesador: "Snapdragon/MediaTek",
      ram: "4-8 GB",
      almacenamiento: "64-256 GB",
      velocidad: "2.4 GHz",
      nucleos: "8 núcleos",
      icono: <Smartphone className="w-8 h-8 text-purple-500" />
    },
    {
      nombre: "Laptop Escolar",
      procesador: "Intel Core i3-i5",
      ram: "8-16 GB",
      almacenamiento: "256-512 GB SSD",
      velocidad: "2.5-3.5 GHz",
      nucleos: "4-6 núcleos",
      icono: <Monitor className="w-8 h-8 text-blue-500" />
    },
    {
      nombre: "PlayStation 5",
      procesador: "AMD Zen 2",
      ram: "16 GB GDDR6",
      almacenamiento: "825 GB SSD",
      velocidad: "3.5 GHz",
      nucleos: "8 núcleos",
      icono: <Gamepad2 className="w-8 h-8 text-green-500" />
    }
  ];

  const tiposProcesamiento = [
    {
      tipo: "Procesamiento de Texto",
      ejemplo: "Escribir en Word",
      recursos: "Bajo",
      descripcion: "Procesar cada letra que escribes",
      datos: "Kilobytes"
    },
    {
      tipo: "Procesamiento de Imagen",
      ejemplo: "Filtros de Instagram",
      recursos: "Medio",
      descripcion: "Modificar millones de píxeles",
      datos: "Megabytes"
    },
    {
      tipo: "Procesamiento de Video",
      ejemplo: "Editar un TikTok",
      recursos: "Alto",
      descripcion: "Procesar 30-60 imágenes por segundo",
      datos: "Gigabytes"
    },
    {
      tipo: "Procesamiento de IA",
      ejemplo: "Filtros de realidad aumentada",
      recursos: "Muy Alto",
      descripcion: "Cálculos complejos en tiempo real",
      datos: "Variable"
    }
  ];

  useEffect(() => {
    if (animacionActiva) {
      const timer = setTimeout(() => setAnimacionActiva(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [animacionActiva]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Metáfora Inicial - Apertura con Curiosidad */}
      <Card className="mb-8 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Cpu className="w-8 h-8 text-cyan-600" />
            🧠 El Cerebro Digital: ¿Cómo piensa tu dispositivo?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg leading-relaxed">
            <p className="mb-4 text-gray-700">
              <span className="font-bold text-cyan-600">Experimento mental:</span> Cuando juegas Free Fire, 
              tu celular está tomando <span className="font-semibold text-blue-600">60 decisiones por segundo</span>: 
              dónde está cada jugador, cómo se mueven las balas, qué sonidos reproducir, cómo mostrar las sombras...
            </p>
            
            <Alert className="border-purple-200 bg-purple-50">
              <Zap className="h-5 w-5 text-purple-600" />
              <AlertDescription className="text-base">
                <span className="font-bold">¡Dato asombroso!</span> Tu smartphone es más poderoso que las computadoras 
                que llevaron al hombre a la Luna en 1969. La NASA usó computadoras con solo 2 KB de RAM. 
                ¡Tu celular tiene 4 millones de veces más memoria! 🚀
              </AlertDescription>
            </Alert>

            <p className="mt-4 text-gray-700">
              Imagina que tu cerebro digital es como <span className="font-semibold">una cocina súper eficiente</span>:
            </p>

            <div className="grid md:grid-cols-3 gap-3 mt-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="font-bold text-cyan-600">El Chef (CPU)</p>
                <p className="text-sm text-gray-600">Prepara los platillos siguiendo recetas</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="font-bold text-green-600">La Mesa de Trabajo (RAM)</p>
                <p className="text-sm text-gray-600">Donde pones los ingredientes actuales</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="font-bold text-purple-600">La Alacena (Almacenamiento)</p>
                <p className="text-sm text-gray-600">Donde guardas todos los ingredientes</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
              <p className="text-yellow-900 font-semibold">
                🤔 Pregunta para despertar tu curiosidad:
              </p>
              <p className="mt-2 text-yellow-800">
                ¿Por qué tu celular se calienta cuando juegas o usas muchas apps? 
                ¿Y por qué se vuelve lento cuando tienes poca memoria disponible?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contenido Conceptual */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Comprende: El Procesamiento Digital
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">¿Qué es el Procesamiento Digital?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              El <span className="font-bold text-blue-600">procesamiento digital</span> es la capacidad de una computadora 
              para transformar datos en información útil mediante operaciones matemáticas y lógicas. 
              Todo lo que hace tu dispositivo se reduce a procesar <span className="font-semibold">ceros y unos</span> 
              a velocidades increíbles.
            </p>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-3">Los 3 Componentes Clave:</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Cpu className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h5 className="font-bold text-blue-700">CPU (Procesador)</h5>
                    <p className="text-sm text-gray-600">
                      El "cerebro" que ejecuta instrucciones. Velocidad medida en GHz (Gigahertz).
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      1 GHz = 1,000 millones de operaciones por segundo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MemoryStick className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h5 className="font-bold text-green-700">RAM (Memoria)</h5>
                    <p className="text-sm text-gray-600">
                      Memoria temporal ultrarrápida para datos en uso. Se mide en GB.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Más RAM = Más aplicaciones abiertas sin lag
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HardDrive className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h5 className="font-bold text-purple-700">Almacenamiento</h5>
                    <p className="text-sm text-gray-600">
                      Donde se guardan permanentemente tus archivos. HDD o SSD, medido en GB/TB.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      SSD es 10x más rápido que HDD tradicional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-cyan-200">
            <Clock className="h-5 w-5 text-cyan-600" />
            <AlertDescription>
              <span className="font-bold">Ciclo de Procesamiento:</span> 
              <span className="font-mono text-sm"> Entrada → Procesamiento → Salida</span>. 
              Este ciclo se repite millones de veces por segundo en tu dispositivo.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Contenido Procedimental */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <PlayCircle className="w-6 h-6 text-green-600" />
            Práctica: Comparando Dispositivos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {dispositivosComunes.map((dispositivo, index) => (
              <div 
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer bg-white"
                onClick={() => setProcesoActivo(dispositivo)}
              >
                <div className="flex flex-col items-center mb-3">
                  {dispositivo.icono}
                  <h4 className="font-bold mt-2">{dispositivo.nombre}</h4>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="font-semibold">CPU:</span> {dispositivo.procesador}</p>
                  <p><span className="font-semibold">RAM:</span> {dispositivo.ram}</p>
                  <p><span className="font-semibold">Storage:</span> {dispositivo.almacenamiento}</p>
                  <p><span className="font-semibold">Velocidad:</span> {dispositivo.velocidad}</p>
                  <p><span className="font-semibold">Núcleos:</span> {dispositivo.nucleos}</p>
                </div>
              </div>
            ))}
          </div>

          {procesoActivo && (
            <Alert className="border-blue-200 bg-blue-50">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                <span className="font-bold">{procesoActivo.nombre}:</span> Con {procesoActivo.nucleos}, 
                puede hacer múltiples tareas al mismo tiempo. Es como tener varios chefs en la cocina.
              </AlertDescription>
            </Alert>
          )}

          <div className="mt-6">
            <h4 className="font-bold mb-3">🎮 Tipos de Procesamiento y Recursos</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {tiposProcesamiento.map((tipo, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-gray-800">{tipo.tipo}</h5>
                    <span className={`text-xs px-2 py-1 rounded ${
                      tipo.recursos === 'Bajo' ? 'bg-green-100 text-green-700' :
                      tipo.recursos === 'Medio' ? 'bg-yellow-100 text-yellow-700' :
                      tipo.recursos === 'Alto' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {tipo.recursos}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Ejemplo:</span> {tipo.ejemplo}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Qué hace:</span> {tipo.descripcion}
                  </p>
                  <p className="text-sm text-blue-600 font-mono">
                    Datos: {tipo.datos}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setComparacionVisible(!comparacionVisible)}
            className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
          >
            {comparacionVisible ? 'Ocultar' : 'Ver'} Comparación: 1990 vs 2024
          </button>

          {comparacionVisible && (
            <div className="bg-gradient-to-r from-gray-100 to-blue-50 p-6 rounded-lg">
              <h4 className="font-bold mb-4 text-center">📱 Evolución del Procesamiento</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-red-600 mb-3">PC de 1990</h5>
                  <ul className="space-y-2 text-sm">
                    <li>• <span className="font-semibold">CPU:</span> Intel 486 - 25 MHz</li>
                    <li>• <span className="font-semibold">RAM:</span> 4 MB</li>
                    <li>• <span className="font-semibold">Disco:</span> 120 MB HDD</li>
                    <li>• <span className="font-semibold">Precio:</span> $3,000 USD</li>
                    <li>• <span className="font-semibold">Peso:</span> 15 kg</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-green-600 mb-3">Smartphone 2024</h5>
                  <ul className="space-y-2 text-sm">
                    <li>• <span className="font-semibold">CPU:</span> 8 núcleos - 3,000 MHz</li>
                    <li>• <span className="font-semibold">RAM:</span> 8,000 MB (8 GB)</li>
                    <li>• <span className="font-semibold">Almacenamiento:</span> 256,000 MB</li>
                    <li>• <span className="font-semibold">Precio:</span> $200 USD</li>
                    <li>• <span className="font-semibold">Peso:</span> 200 gramos</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-blue-600">
                  ¡Tu celular es 120x más rápido, tiene 2000x más memoria, y cuesta 15x menos!
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contenido Actitudinal */}
      <Card className="mb-6 border-green-200">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-xl flex items-center gap-2">
            💡 Reflexiona: Optimización y Eficiencia
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-green-900">¿Por qué importa entender el procesamiento?</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Para elegir el dispositivo correcto según tus necesidades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Para entender por qué algunas apps consumen más recursos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Para optimizar el rendimiento de tus dispositivos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Para tomar decisiones informadas al comprar tecnología</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-blue-900">🔋 Tips para Optimizar tu Dispositivo</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-sm mb-2">Para tu Celular:</p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Cierra apps que no uses</li>
                  <li>• Reinicia cada semana</li>
                  <li>• Mantén 10% de espacio libre</li>
                  <li>• Actualiza el sistema operativo</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-sm mb-2">Para tu Laptop:</p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• No abras 50 pestañas del navegador</li>
                  <li>• Usa un antivirus ligero</li>
                  <li>• Desfragmenta el disco (HDD)</li>
                  <li>• Limpia el polvo del ventilador</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <AlertDescription>
              <span className="font-bold">Reflexión Final:</span> La tecnología avanza exponencialmente. 
              Lo que hoy parece imposible, mañana será cotidiano. En Chetumal, hace 20 años apenas 
              llegaba el internet dial-up. Hoy tienes más poder de procesamiento en tu bolsillo 
              que centros de cómputo enteros de esa época.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Referencias */}
      <Card className="border-gray-200">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-lg">📚 Referencias y Fuentes</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Patterson, D. A., & Hennessy, J. L. (2021). <em>Computer Organization and Design: The Hardware/Software Interface</em> (6th ed.). Morgan Kaufmann.</p>
            <p>• Stallings, W. (2022). <em>Computer Organization and Architecture</em> (11th ed.). Pearson.</p>
            <p>• Moore, G. E. (1965). "Cramming more components onto integrated circuits". <em>Electronics Magazine</em>, 38(8), 114-117.</p>
            <p>• Intel Corporation. (2024). <em>Understanding Processor Specifications</em>. Intel Developer Zone.</p>
            <p>• ARM Holdings. (2023). <em>Mobile Processor Architecture Guide</em>. ARM Developer Documentation.</p>
            <p>• García-Martínez, R., & Lara-Rosano, F. (2022). <em>Fundamentos de Arquitectura de Computadoras</em>. Alfaomega.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Procesamiento;