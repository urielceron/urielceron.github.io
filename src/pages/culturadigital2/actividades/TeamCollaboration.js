import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import useDarkMode from '../../../hooks/useDarkMode';
import DarkModeToggle from '../../../components/DarkModeToggle';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert";
import BackButton from '../../../components/BackButton';

const TeamCollaboration = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const [metrics] = useState([
        {
            week: 1,
            activities: [
                {
                    role: "Coordinador",
                    tasks: "Establecer cronograma y objetivos",
                    status: "Pendiente",
                    feedback: ""
                },
                {
                    role: "Equipo",
                    tasks: "Reunión inicial de planificación",
                    status: "Pendiente",
                    feedback: ""
                }
            ]
        },
        {
            week: 2,
            activities: [
                {
                    role: "Investigadores",
                    tasks: "Compartir avances de investigación",
                    status: "Pendiente",
                    feedback: ""
                },
                {
                    role: "Diseñadores",
                    tasks: "Presentar propuestas de diseño",
                    status: "Pendiente",
                    feedback: ""
                }
            ]
        }
    ]);

    const [collaboration] = useState([
        {
            aspect: "Comunicación",
            criteria: [
                "Uso efectivo de herramientas colaborativas",
                "Reuniones periódicas documentadas",
                "Retroalimentación constructiva",
                "Registro de decisiones"
            ]
        },
        {
            aspect: "Gestión",
            criteria: [
                "Cumplimiento de plazos",
                "Distribución equitativa",
                "Resolución de conflictos",
                "Seguimiento de progreso"
            ]
        },
        {
            aspect: "Calidad",
            criteria: [
                "Revisiones por pares",
                "Control de versiones",
                "Documentación clara",
                "Mejora continua"
            ]
        }
    ]);

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <BackButton />
                        <div className="flex items-center space-x-4">
                            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Trabajo Colaborativo y Gestión
                            </h1>
                            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <Card>
                    <CardHeader>
                        <CardTitle className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : ''}`}>
                            Seguimiento de Trabajo Colaborativo
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert className="mb-6">
                            <AlertTitle>Valor de la Evidencia: 10% de la Calificación Final</AlertTitle>
                            <AlertDescription>
                                Seguimiento y evaluación del trabajo colaborativo en el desarrollo
                                de la Wiki Educativa.
                            </AlertDescription>
                        </Alert>

                        {/* Métricas de Seguimiento */}
                        <div className="mb-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Métricas de Seguimiento</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className={`font-semibold px-4 py-2 ${darkMode ? 'text-white' : ''}`}>
                                            Semana</TableHead>
                                        <TableHead className={`font-semibold px-4 py-2 ${darkMode ? 'text-white' : ''}`}>
                                            Rol</TableHead>
                                        <TableHead className={`font-semibold px-4 py-2 ${darkMode ? 'text-white' : ''}`}>
                                            Actividades</TableHead>
                                        <TableHead className={`font-semibold px-4 py-2 ${darkMode ? 'text-white' : ''}`}>
                                            Estado</TableHead>
                                        <TableHead className={`font-semibold px-4 py-2 ${darkMode ? 'text-white' : ''}`}>
                                            Retroalimentación</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {metrics.map((week) =>
                                        week.activities.map((activity, index) => (
                                            <TableRow key={`${week.week}-${index}`}>
                                                {index === 0 && (
                                                    <TableCell
                                                        className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}
                                                        rowSpan={week.activities.length}>
                                                        Semana {week.week}
                                                    </TableCell>
                                                )}
                                                <TableCell className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}>{activity.role}</TableCell>
                                                <TableCell className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}>{activity.tasks}</TableCell>
                                                <TableCell className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}>
                                                    <select
                                                        className="w-full bg-transparent border rounded p-1 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                                                        defaultValue={activity.status}
                                                    >
                                                        <option className="dark:bg-gray-800">Pendiente</option>
                                                        <option className="dark:bg-gray-800">En Proceso</option>
                                                        <option className="dark:bg-gray-800">Completado</option>
                                                    </select>
                                                </TableCell>
                                                <TableCell className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}>
                                                    <input
                                                        type="text"
                                                        className="w-full bg-transparent border rounded p-1"
                                                        placeholder="Agregar comentario..."
                                                        defaultValue={activity.feedback}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>

                        {/* Criterios de Evaluación */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Criterios de Evaluación (10%)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {collaboration.map((category) => (
                                    <Card key={category.aspect} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{category.aspect}</h4>
                                        <ul className="list-disc pl-4 mt-2">
                                            {category.criteria.map((criterion, index) => (
                                                <li key={index} className="text-sm">{criterion}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Recomendaciones */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}> Recomendaciones</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Herramientas Sugeridas</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Google Meet para reuniones</li>
                                        <li className="text-sm">Google Drive para documentos</li>
                                        <li className="text-sm">Google Calendar para cronograma</li>
                                        <li className="text-sm">Google Chat para comunicación</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Mejores Prácticas</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Reuniones semanales de seguimiento</li>
                                        <li className="text-sm">Documentación de acuerdos</li>
                                        <li className="text-sm">Rotación de responsabilidades</li>
                                        <li className="text-sm">Retroalimentación continua</li>
                                    </ul>
                                </Card>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default TeamCollaboration;