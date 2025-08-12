import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { Input } from '../../../../components/ui/input';
import { Button } from '../../../../components/ui/button';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const RegistroDatos = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [registros, setRegistros] = useState([]);
  const [nuevoRegistro, setNuevoRegistro] = useState({
    fecha: '',
    hora: '',
    nombre: '',
    pulsoReposo: '',
    pulsoActividad: '',
    diferencia: '',
    observaciones: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newRegistro = { ...nuevoRegistro, [name]: value };

    if (name === 'pulsoReposo' || name === 'pulsoActividad') {
      const reposo = name === 'pulsoReposo' ? value : nuevoRegistro.pulsoReposo;
      const actividad = name === 'pulsoActividad' ? value : nuevoRegistro.pulsoActividad;

      if (reposo && actividad) {
        const dif = parseInt(actividad) - parseInt(reposo);
        newRegistro.diferencia = dif.toString();
      }
    }

    setNuevoRegistro(newRegistro);
  };

  const agregarRegistro = () => {
    if (!nuevoRegistro.fecha || !nuevoRegistro.nombre || !nuevoRegistro.pulsoReposo || !nuevoRegistro.pulsoActividad) {
      alert('Por favor complete los campos obligatorios');
      return;
    }

    setRegistros([...registros, { ...nuevoRegistro, id: Date.now() }]);
    setNuevoRegistro({
      fecha: '',
      hora: '',
      nombre: '',
      pulsoReposo: '',
      pulsoActividad: '',
      diferencia: '',
      observaciones: ''
    });
  };

  const borrarRegistro = (id) => {
    setRegistros(registros.filter(reg => reg.id !== id));
  };

 return (
   <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
     <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
       <div className="max-w-7xl mx-auto px-4">
         <div className="flex justify-between items-center h-16">
           <BackButton />
           <div className="flex items-center space-x-4">
             <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
               Registro de Datos
             </h1>
             <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
           </div>
         </div>
       </div>
     </nav>

     <main className="max-w-7xl mx-auto px-4 py-8">
       <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
         <CardHeader>
           <CardTitle className="text-gray-900 dark:text-white">
           <mark>Registro de Mediciones de Pulso</mark>
           </CardTitle>
         </CardHeader>
         <CardContent>
           <div className="grid grid-cols-7 gap-4 mb-4">
             <Input
               type="date"
               name="fecha"
               value={nuevoRegistro.fecha}
               onChange={handleInputChange}
               className="col-span-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
               required
             />
             <Input
               type="time"
               name="hora"
               value={nuevoRegistro.hora}
               onChange={handleInputChange}
               className="col-span-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
             />
             <Input
               type="text"
               name="nombre"
               value={nuevoRegistro.nombre}
               onChange={handleInputChange}
               placeholder="Nombre del estudiante"
               className="col-span-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
               required
             />
             <Input
               type="number"
               name="pulsoReposo"
               value={nuevoRegistro.pulsoReposo}
               onChange={handleInputChange}
               placeholder="Pulso en reposo"
               className="col-span-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
               required
             />
             <Input
               type="number"
               name="pulsoActividad"
               value={nuevoRegistro.pulsoActividad}
               onChange={handleInputChange}
               placeholder="Pulso post-actividad"
               className="col-span-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
               required
             />
             <Input
               type="text"
               name="diferencia"
               value={nuevoRegistro.diferencia}
               readOnly
               placeholder="Diferencia"
               className="col-span-1 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
             />
             <Input
               type="text"
               name="observaciones"
               value={nuevoRegistro.observaciones}
               onChange={handleInputChange}
               placeholder="Observaciones"
               className="col-span-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
             />
           </div>

           <Button
             onClick={agregarRegistro}
             className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-4"
           >
             Agregar Registro
           </Button>

           <div className="overflow-x-auto">
             <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
               <thead>
                 <tr className="bg-gray-100 dark:bg-gray-600">
                   <th className="border px-4 py-2 text-gray-900 dark:text-white">Fecha</th>
                   <th className="border px-4 py-2 text-gray-900 dark:text-white">Hora</th>
                   <th className="border px-4 py-2 text-gray-900 dark:text-white">Nombre</th>
                   <th className="border px-4 py-2 text-gray-900 dark:text-white">Pulso Reposo</th>
                   <th className="border px-4 py-2 text-gray-900 dark:text-white">Pulso Actividad</th>
                   <th className="border px-4 py-2 text-gray-900 dark:text-white">Diferencia</th>
                   <th className="border px-4 py-2 text-gray-900 dark:text-white">Observaciones</th>
                   <th className="border px-4 py-2 text-gray-900 dark:text-white">Acciones</th>
                 </tr>
               </thead>
               <tbody>
                 {registros.map((registro) => (
                   <tr key={registro.id}>
                     <td className="border px-4 py-2 text-gray-900 dark:text-white">{registro.fecha}</td>
                     <td className="border px-4 py-2 text-gray-900 dark:text-white">{registro.hora}</td>
                     <td className="border px-4 py-2 text-gray-900 dark:text-white">{registro.nombre}</td>
                     <td className="border px-4 py-2 text-gray-900 dark:text-white">{registro.pulsoReposo}</td>
                     <td className="border px-4 py-2 text-gray-900 dark:text-white">{registro.pulsoActividad}</td>
                     <td className="border px-4 py-2 text-gray-900 dark:text-white">{registro.diferencia}</td>
                     <td className="border px-4 py-2 text-gray-900 dark:text-white">{registro.observaciones}</td>
                     <td className="border px-4 py-2">
                       <Button
                         onClick={() => borrarRegistro(registro.id)}
                         className="bg-red-500 hover:bg-red-600 text-white"
                       >
                         Eliminar
                       </Button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </CardContent>
       </Card>

       <Card className={`${darkMode ? 'bg-gray-800' : 'bg-white'} mt-8`}>
         <CardHeader>
           <CardTitle className="text-gray-900 dark:text-white">
             <mark># EJEMPLOS MATEMÁTICOS: PROPORCIÓN ÁUREA Y FRACTALES</mark>
           </CardTitle>
         </CardHeader>
         <CardContent>
           <div className={`space-y-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
             
             {/* Proporción Áurea */}
             <section>
               <h2 className="text-2xl font-bold mb-4 text-yellow-600">🌟 PROPORCIÓN ÁUREA EN EL CUERPO HUMANO (φ = 1.618...)</h2>
               
               <div className="mb-6">
                 <h3 className="text-xl font-semibold mb-3">**Ejemplo 1: Mediciones Corporales**</h3>
                 <p className="mb-3">**📏 Medidas típicas de una persona de 1.70m:**</p>
                 
                 <div className="overflow-x-auto mb-4">
                   <table className={`min-w-full border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                     <thead>
                       <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                         <th className="border px-4 py-2">Medición</th>
                         <th className="border px-4 py-2">Valor (cm)</th>
                         <th className="border px-4 py-2">Cálculo</th>
                         <th className="border px-4 py-2">Proporción</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Estatura total</td>
                         <td className="border px-4 py-2">170 cm</td>
                         <td className="border px-4 py-2">-</td>
                         <td className="border px-4 py-2">Base</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Ombligo a pies</td>
                         <td className="border px-4 py-2">105 cm</td>
                         <td className="border px-4 py-2">170 ÷ 105</td>
                         <td className="border px-4 py-2 font-bold text-yellow-600">1.619 ≈ φ</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Cabeza a ombligo</td>
                         <td className="border px-4 py-2">65 cm</td>
                         <td className="border px-4 py-2">105 ÷ 65</td>
                         <td className="border px-4 py-2 font-bold text-yellow-600">1.615 ≈ φ</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>

                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                   <h4 className="font-semibold mb-2">🧮 Cálculos paso a paso:</h4>
                   <pre className="whitespace-pre-wrap">
{`Proporción 1: 170 ÷ 105 = 1.619 ≈ 1.618 ✓
Proporción 2: 105 ÷ 65 = 1.615 ≈ 1.618 ✓`}
                   </pre>
                 </div>
               </div>

               <div className="mb-6">
                 <h3 className="text-xl font-semibold mb-3">**Ejemplo 2: Mediciones del Rostro**</h3>
                 <p className="mb-3">**👤 Cara humana típica (20cm de alto):**</p>
                 
                 <div className="overflow-x-auto mb-4">
                   <table className={`min-w-full border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                     <thead>
                       <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                         <th className="border px-4 py-2">Parte del rostro</th>
                         <th className="border px-4 py-2">Medida (cm)</th>
                         <th className="border px-4 py-2">Cálculo</th>
                         <th className="border px-4 py-2">Resultado</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Frente a barbilla</td>
                         <td className="border px-4 py-2">20.0</td>
                         <td className="border px-4 py-2">-</td>
                         <td className="border px-4 py-2">Total</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Línea ojos a barbilla</td>
                         <td className="border px-4 py-2">12.4</td>
                         <td className="border px-4 py-2">20.0 ÷ 12.4</td>
                         <td className="border px-4 py-2 font-bold text-yellow-600">1.613 ≈ φ</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Nariz a barbilla</td>
                         <td className="border px-4 py-2">7.6</td>
                         <td className="border px-4 py-2">12.4 ÷ 7.6</td>
                         <td className="border px-4 py-2 font-bold text-yellow-600">1.632 ≈ φ</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>

                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} text-blue-800 dark:text-blue-200`}>
                   <p className="font-semibold">✋ Ejercicio práctico para estudiantes:</p>
                   <p className="italic">"Mide tu altura total y desde tu ombligo hasta el suelo. Divide la primera entre la segunda. ¿Te acercas a 1.618?"</p>
                 </div>
               </div>
             </section>

             {/* Fractales */}
             <section>
               <h2 className="text-2xl font-bold mb-4 text-green-600">🌿 FRACTALES EN HELECHOS</h2>
               
               <div className="mb-6">
                 <h3 className="text-xl font-semibold mb-3">**Ejemplo 1: Estructura Básica del Helecho**</h3>
                 <p className="mb-3">**🔬 Patrón de autosimilitud:**</p>
                 
                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                   <pre className="whitespace-pre-wrap text-sm">
{`FRONDA PRINCIPAL (Nivel 0)
├── Hoja 1 ────── miniatura de la fronda completa
├── Hoja 2 ────── miniatura de la fronda completa  
├── Hoja 3 ────── miniatura de la fronda completa
└── Hoja n ────── miniatura de la fronda completa

CADA HOJA (Nivel 1)
├── Sub-hoja 1 ── miniatura de la hoja principal
├── Sub-hoja 2 ── miniatura de la hoja principal
└── Sub-hoja n ── miniatura de la hoja principal

CADA SUB-HOJA (Nivel 2)
├── Folíolo 1 ─── miniatura de la sub-hoja
├── Folíolo 2 ─── miniatura de la sub-hoja
└── Folíolo n ─── miniatura de la sub-hoja`}
                   </pre>
                 </div>
               </div>

               <div className="mb-6">
                 <h3 className="text-xl font-semibold mb-3">**Ejemplo 2: Cálculo de Escalamiento Fractal**</h3>
                 <p className="mb-3">**📐 Mediciones reales de un helecho:**</p>
                 
                 <div className="overflow-x-auto mb-4">
                   <table className={`min-w-full border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                     <thead>
                       <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                         <th className="border px-4 py-2">Nivel</th>
                         <th className="border px-4 py-2">Tamaño Típico</th>
                         <th className="border px-4 py-2">Factor de Reducción</th>
                         <th className="border px-4 py-2">Cálculo</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Fronda principal</td>
                         <td className="border px-4 py-2">30 cm</td>
                         <td className="border px-4 py-2">-</td>
                         <td className="border px-4 py-2">Escala 1.0</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Hoja individual</td>
                         <td className="border px-4 py-2">6 cm</td>
                         <td className="border px-4 py-2">30 ÷ 6 = 5</td>
                         <td className="border px-4 py-2">Escala 0.2</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Sub-hoja</td>
                         <td className="border px-4 py-2">1.2 cm</td>
                         <td className="border px-4 py-2">6 ÷ 1.2 = 5</td>
                         <td className="border px-4 py-2">Escala 0.04</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Folíolo</td>
                         <td className="border px-4 py-2">0.24 cm</td>
                         <td className="border px-4 py-2">1.2 ÷ 0.24 = 5</td>
                         <td className="border px-4 py-2">Escala 0.008</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>

                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                   <h4 className="font-semibold mb-2">🧮 Patrón matemático identificado:</h4>
                   <pre className="whitespace-pre-wrap">
{`Cada nivel se reduce por un factor de 5
Nivel 0: 30 cm × (1)
Nivel 1: 30 cm × (1/5) = 6 cm
Nivel 2: 30 cm × (1/5)² = 1.2 cm  
Nivel 3: 30 cm × (1/5)³ = 0.24 cm`}
                   </pre>
                 </div>
               </div>

               <div className="mb-6">
                 <h3 className="text-xl font-semibold mb-3">**Ejemplo 3: Conteo Fractal Simple**</h3>
                 <p className="mb-3">**🔢 ¿Cuántas partes tiene un helecho?**</p>
                 <p className="mb-3">Supongamos que cada hoja se divide en 4 sub-hojas:</p>
                 
                 <div className="overflow-x-auto mb-4">
                   <table className={`min-w-full border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                     <thead>
                       <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                         <th className="border px-4 py-2">Nivel</th>
                         <th className="border px-4 py-2">Elementos</th>
                         <th className="border px-4 py-2">Cálculo</th>
                         <th className="border px-4 py-2">Total Acumulado</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Nivel 0</td>
                         <td className="border px-4 py-2">1 fronda</td>
                         <td className="border px-4 py-2">1</td>
                         <td className="border px-4 py-2">1</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Nivel 1</td>
                         <td className="border px-4 py-2">4 hojas</td>
                         <td className="border px-4 py-2">1 × 4</td>
                         <td className="border px-4 py-2">5</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Nivel 2</td>
                         <td className="border px-4 py-2">16 sub-hojas</td>
                         <td className="border px-4 py-2">4 × 4</td>
                         <td className="border px-4 py-2">21</td>
                       </tr>
                       <tr>
                         <td className="border px-4 py-2 font-bold">Nivel 3</td>
                         <td className="border px-4 py-2">64 folíolos</td>
                         <td className="border px-4 py-2">16 × 4</td>
                         <td className="border px-4 py-2">85</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>

                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                   <h4 className="font-semibold mb-2">📊 Fórmula fractal:</h4>
                   <pre className="whitespace-pre-wrap">
{`Total de elementos = 4⁰ + 4¹ + 4² + 4³ = 1 + 4 + 16 + 64 = 85 partes`}
                   </pre>
                 </div>
               </div>
             </section>

             {/* Ejercicios Prácticos */}
             <section>
               <h2 className="text-2xl font-bold mb-4 text-purple-600">🎯 EJERCICIOS PRÁCTICOS PARA ESTUDIANTES</h2>
               
               <div className="grid md:grid-cols-2 gap-6 mb-6">
                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-yellow-900' : 'bg-yellow-100'} text-yellow-800 dark:text-yellow-200`}>
                   <h3 className="font-semibold mb-3">**Ejercicio 1: Proporción Áurea Personal**</h3>
                   <ol className="list-decimal list-inside space-y-2">
                     <li>Mide tu estatura total: _____ cm</li>
                     <li>Mide desde tu ombligo hasta el suelo: _____ cm</li>
                     <li>Divide: estatura ÷ ombligo-suelo = _____</li>
                     <li>¿Te acercas a 1.618? _____</li>
                   </ol>
                 </div>
                 
                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900' : 'bg-green-100'} text-green-800 dark:text-green-200`}>
                   <h3 className="font-semibold mb-3">**Ejercicio 2: Helecho Fractal**</h3>
                   <p className="mb-2">Observa una hoja de helecho y cuenta:</p>
                   <ol className="list-decimal list-inside space-y-2">
                     <li>¿Cuántas hojas principales tiene? _____</li>
                     <li>¿Cuántas sub-hojas tiene una hoja principal? _____</li>
                     <li>Si cada sub-hoja tiene 3 folíolos, ¿cuál es el total de folíolos? _____</li>
                     <li>Calcula: hojas × sub-hojas × folíolos = _____</li>
                   </ol>
                 </div>
               </div>
             </section>

             {/* Conexión con la Naturaleza */}
             <section>
               <h2 className="text-2xl font-bold mb-4 text-blue-600">🔬 CONEXIÓN CON LA NATURALEZA</h2>
               
               <div className="mb-4">
                 <h3 className="text-xl font-semibold mb-3">**¿Por qué aparecen estos patrones?**</h3>
                 
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                     <h4 className="font-semibold mb-2">**Proporción Áurea:**</h4>
                     <ul className="list-disc list-inside space-y-1">
                       <li>**Eficiencia estructural** → El cuerpo humano se organiza de forma eficiente</li>
                       <li>**Percepción de belleza** → Nuestro cerebro reconoce estas proporciones como armoniosas</li>
                     </ul>
                   </div>
                   
                   <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                     <h4 className="font-semibold mb-2">**Fractales en helechos:**</h4>
                     <ul className="list-disc list-inside space-y-1">
                       <li>**Maximización de superficie** → Más área para fotosíntesis en menos espacio</li>
                       <li>**Eficiencia de empaque** → Optimiza el crecimiento en espacios limitados</li>
                       <li>**Información genética mínima** → Un mismo patrón se repite a diferentes escalas</li>
                     </ul>
                   </div>
                 </div>
               </div>
             </section>

             {/* Aplicaciones Prácticas */}
             <section>
               <h2 className="text-2xl font-bold mb-4 text-red-600">📚 APLICACIONES PRÁCTICAS</h2>
               
               <div className="grid md:grid-cols-3 gap-4">
                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                   <h4 className="font-semibold mb-2">**En Arte y Diseño:**</h4>
                   <ul className="list-disc list-inside space-y-1 text-sm">
                     <li>Rectángulo áureo: 5cm × 8.09cm (5 × 1.618)</li>
                     <li>Espiral áurea en logos y composiciones</li>
                   </ul>
                 </div>
                 
                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                   <h4 className="font-semibold mb-2">**En Arquitectura:**</h4>
                   <ul className="list-disc list-inside space-y-1 text-sm">
                     <li>Proporciones de edificios clásicos</li>
                     <li>Dimensiones de habitaciones armoniosas</li>
                   </ul>
                 </div>
                 
                 <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                   <h4 className="font-semibold mb-2">**En Tecnología:**</h4>
                   <ul className="list-disc list-inside space-y-1 text-sm">
                     <li>Pantallas y dispositivos con proporciones áureas</li>
                     <li>Algoritmos de compresión fractal para imágenes</li>
                   </ul>
                 </div>
               </div>
             </section>

           </div>
         </CardContent>
       </Card>
     </main>
   </div>
 );
};

export default RegistroDatos;