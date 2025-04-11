import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { Input } from '../../../../components/ui/input';
import { Button } from '../../../../components/ui/button';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';
import BackButton from '../../../../components/BackButton';

const FormacionEquipos = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [equipo, setEquipo] = useState({
        coordinador: '',
        cronometrista: '',
        registrador: '',
        analista: '',
        dibujante: '',
        documentador: '',
        revisor: '',
        presentador: '',
    });

    const [equipos, setEquipos] = useState([]);

    const handleInputChange = (e) => {
        setEquipo({
            ...equipo,
            [e.target.name]: e.target.value
        });
    };

    const agregarEquipo = () => {
        setEquipos([...equipos, { ...equipo, id: Date.now() }]);
        setEquipo({
            coordinador: '',
            cronometrista: '',
            registrador: '',
            analista: '',
            dibujante: '',
            documentador: '',
            revisor: '',
            presentador: '',
        });
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <BackButton />
                        <div className="flex items-center space-x-4">
                            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Formación de Equipos
                            </h1>
                            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
                    <CardHeader>
                        <CardTitle className="text-gray-900 dark:text-white">
                            <mark>Formación de Equipos y Asignación de Roles (8 integrantes)</mark>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                                Registro de Equipos
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <Input
                                    type="text"
                                    name="coordinador"
                                    value={equipo.coordinador}
                                    onChange={handleInputChange}
                                    placeholder="Nombre del Coordinador"
                                    className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <Input
                                    type="text"
                                    name="cronometrista"
                                    value={equipo.cronometrista}
                                    onChange={handleInputChange}
                                    placeholder="Nombre del Cronometrista"
                                    className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <Input
                                    type="text"
                                    name="registrador"
                                    value={equipo.registrador}
                                    onChange={handleInputChange}
                                    placeholder="Nombre del Registrador"
                                    className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <Input
                                    type="text"
                                    name="analista"
                                    value={equipo.analista}
                                    onChange={handleInputChange}
                                    placeholder="Nombre del Analista"
                                    className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <Input
                                    type="text"
                                    name="dibujante"
                                    value={equipo.dibujante}
                                    onChange={handleInputChange}
                                    placeholder="Nombre del Dibujante"
                                    className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <Input
                                    type="text"
                                    name="documentador"
                                    value={equipo.documentador}
                                    onChange={handleInputChange}
                                    placeholder="Nombre del Documentador"
                                    className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <Input
                                    type="text"
                                    name="revisor"
                                    value={equipo.revisor}
                                    onChange={handleInputChange}
                                    placeholder="Nombre del Revisor"
                                    className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <Input
                                    type="text"
                                    name="presentador"
                                    value={equipo.presentador}
                                    onChange={handleInputChange}
                                    placeholder="Nombre del Presentador"
                                    className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                            </div>

                            <Button
                                onClick={agregarEquipo}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-4"
                            >
                                Registrar Equipo
                            </Button>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                                    <thead>
                                        <tr className="bg-gray-100 dark:bg-gray-600">
                                            <th className="border px-4 py-2 text-gray-900 dark:text-white">Rol</th>
                                            <th className="border px-4 py-2 text-gray-900 dark:text-white">Nombre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {equipos.map((eq) => (
                                            <>
                                                <tr key={`${eq.id}-1`}>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">Coordinador</td>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">{eq.coordinador}</td>
                                                </tr>
                                                <tr key={`${eq.id}-2`}>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">Cronometrista</td>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">{eq.cronometrista}</td>
                                                </tr>
                                                <tr key={`${eq.id}-3`}>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">Registrador</td>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">{eq.registrador}</td>
                                                </tr>
                                                <tr key={`${eq.id}-4`}>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">Analista</td>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">{eq.analista}</td>
                                                </tr>
                                                <tr key={`${eq.id}-5`}>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">Dibujante</td>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">{eq.dibujante}</td>
                                                </tr>
                                                <tr key={`${eq.id}-6`}>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">Documentador</td>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">{eq.documentador}</td>
                                                </tr>
                                                <tr key={`${eq.id}-7`}>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">Revisor</td>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">{eq.revisor}</td>
                                                </tr>
                                                <tr key={`${eq.id}-8`}>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">Presentador</td>
                                                    <td className="border px-4 py-2 text-gray-900 dark:text-white">{eq.presentador}</td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>



                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Guía para el Trabajo en Equipo Efectivo</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-2 text-blue-800 dark:text-blue-200">Comunicación Efectiva</h4>
                                    <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                        <li>Establecer un canal de comunicación oficial (WhatsApp, Teams, etc.)</li>
                                        <li>Programar reuniones breves de seguimiento (15-20 min)</li>
                                        <li>Mantener un registro de acuerdos y pendientes</li>
                                        <li>Comunicar problemas o retrasos de manera oportuna</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-2 text-green-800 dark:text-green-200">Distribución del Trabajo</h4>
                                    <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                        <li>Dividir tareas grandes en subtareas manejables</li>
                                        <li>Asignar responsabilidades según habilidades</li>
                                        <li>Establecer fechas de entrega intermedias</li>
                                        <li>Rotar roles secundarios para aprendizaje mutuo</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-2 text-purple-800 dark:text-purple-200">Resolución de Conflictos</h4>
                                    <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                        <li>Abordar desacuerdos de manera inmediata y respetuosa</li>
                                        <li>Enfocarse en soluciones, no en culpables</li>
                                        <li>Establecer reglas de convivencia claras</li>
                                        <li>Solicitar mediación del docente si es necesario</li>
                                    </ul>
                                </div>

                                <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-2 text-orange-800 dark:text-orange-200">Motivación y Compromiso</h4>
                                    <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                        <li>Reconocer y celebrar logros individuales y grupales</li>
                                        <li>Compartir conocimientos y habilidades</li>
                                        <li>Mantener un ambiente positivo y colaborativo</li>
                                        <li>Establecer metas claras y alcanzables</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Video Tutorial: Trabajo en Equipo Efectivo</h4>
                                <div className="aspect-w-16 aspect-h-9">
                                    <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/INRzFKTzmZs?si=YdTZLxk6GMtQ4FvJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default FormacionEquipos;