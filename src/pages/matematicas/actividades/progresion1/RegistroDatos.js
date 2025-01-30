import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { Input } from '../../../../components/ui/input';
import { Button } from '../../../../components/ui/button';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

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
           <button
             onClick={() => navigate('/matematicas')}
             className={`${darkMode
               ? 'text-blue-400 hover:text-blue-300'
               : 'text-blue-600 hover:text-blue-800'
             } font-medium transition-colors duration-300`}
           >
             ← Regresar a Temas Selectos
           </button>
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
     </main>
   </div>
 );
};

export default RegistroDatos;