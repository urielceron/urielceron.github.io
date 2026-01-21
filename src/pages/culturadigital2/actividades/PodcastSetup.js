import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import useDarkMode from '../../../hooks/useDarkMode';
import DarkModeToggle from '../../../components/DarkModeToggle';
import BackButton from '../../../components/BackButton';

const PodcastProject = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const [guidelines, setGuidelines] = useState([
        {
            category: "Preparación",
            tasks: [
                { id: "prep1", text: "Formar equipo de 8 integrantes", completed: false },
                { id: "prep2", text: "Asignar roles específicos (director, guionistas, investigadores, editores, locutor)", completed: false },
                { id: "prep3", text: "Instalar Spotify for Podcasters (Anchor) en dispositivos móviles", completed: false },
                { id: "prep4", text: "Crear cuenta gratuita en Anchor", completed: false }
            ]
        },
        {
            category: "Investigación",
            tasks: [
                { id: "inv1", text: "Investigar herramientas tecnológicas para proyectos escolares", completed: false },
                { id: "inv2", text: "Documentar características y beneficios de cada herramienta", completed: false },
                { id: "inv3", text: "Recopilar ejemplos de uso en contexto educativo", completed: false },
                { id: "inv4", text: "Organizar información por categorías", completed: false }
            ]
        },
        {
            category: "Producción",
            tasks: [
                { id: "prod1", text: "Desarrollar guion del podcast", completed: false },
                { id: "prod2", text: "Realizar pruebas de audio", completed: false },
                { id: "prod3", text: "Grabar episodio piloto", completed: false },
                { id: "prod4", text: "Editar y revisar contenido", completed: false }
            ]
        }
    ]);

    const [roles] = useState([
        {
            title: "Director",
            responsibilities: [
                "Coordinar al equipo",
                "Supervisar calidad del contenido",
                "Gestionar tiempos",
                "Aprobar versión final"
            ]
        },
        {
            title: "Guionistas (2)",
            responsibilities: [
                "Escribir guion del podcast",
                "Estructurar contenido",
                "Adaptar información técnica",
                "Revisar coherencia"
            ]
        },
        {
            title: "Investigadores (2)",
            responsibilities: [
                "Buscar herramientas relevantes",
                "Analizar funcionalidades",
                "Verificar fuentes",
                "Documentar hallazgos"
            ]
        },
        {
            title: "Editores de Audio (2)",
            responsibilities: [
                "Editar grabaciones",
                "Mejorar calidad de audio",
                "Agregar efectos/música",
                "Exportar archivo final"
            ]
        },
        {
            title: "Locutor",
            responsibilities: [
                "Narrar contenido",
                "Mantener ritmo adecuado",
                "Realizar pruebas de voz",
                "Regrabar según necesidad"
            ]
        }
    ]);

    const handleTaskCompletion = (categoryIndex, taskId, completed) => {
        setGuidelines(prevGuidelines =>
            prevGuidelines.map((category, idx) => {
                if (idx === categoryIndex) {
                    return {
                        ...category,
                        tasks: category.tasks.map(task =>
                            task.id === taskId ? { ...task, completed } : task
                        )
                    };
                }
                return category;
            })
        );
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <BackButton />
                        <div className="flex items-center space-x-4">
                            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              Calidad y organización del contenido wiki
                            </h1>
                            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
                    <CardHeader>
                        <CardTitle className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : ''}`}>
                            Fase de Apertura: Introducción al Proyecto
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert className="mb-6">
                            <AlertTitle>Valor de la Evidencia: 25% de la Calificación Final</AlertTitle>
                            <AlertDescription>
                                Creación de un podcast educativo sobre herramientas tecnológicas para
                                proyectos escolares utilizando Spotify for Podcasters (Anchor).
                            </AlertDescription>
                        </Alert>

                        {/* Lista de Verificación */}
                        <div className="mb-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Lista de Verificación
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {guidelines.map((category, categoryIndex) => (
                                    <Card key={category.category} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{category.category}</h4>
                                        <div className="mt-2 space-y-2">
                                            {category.tasks.map((task) => (
                                                <div key={task.id} className="flex items-start space-x-2">
                                                    <Checkbox
                                                        id={task.id}
                                                        checked={task.completed}
                                                        onCheckedChange={(checked) =>
                                                            handleTaskCompletion(categoryIndex, task.id, checked)
                                                        }
                                                    />
                                                    <label htmlFor={task.id} className="text-sm">
                                                        {task.text}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Roles y Responsabilidades */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Roles y Responsabilidades
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {roles.map((role) => (
                                    <Card key={role.title} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{role.title}</h4>
                                        <ul className="list-disc pl-4 mt-2">
                                            {role.responsibilities.map((resp, index) => (
                                                <li key={index} className="text-sm">{resp}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Recursos y Herramientas */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Recursos y Herramientas
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Herramientas Principales</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Spotify for Podcasters (Anchor)</li>
                                        <li className="text-sm">Audacity para edición de audio</li>
                                        <li className="text-sm">RiverSide para grabación remota</li>
                                        <li className="text-sm">Auriculares con micrófono</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Recursos de Apoyo</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Tutorial: Primeros pasos con Spotify for Podcasters</li>
                                        <li className="text-sm">Guía de grabación y edición de audio</li>
                                        <li className="text-sm">Plantilla de guion de podcast</li>
                                        <li className="text-sm">Ejemplos de podcasts educativos</li>
                                    </ul>
                                </Card>
                            </div>
                        </div>

                        {/* Criterios de Evaluación */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Criterios de Evaluación (25%)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Contenido (10%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Calidad de la investigación</li>
                                        <li className="text-sm">Precisión de la información</li>
                                        <li className="text-sm">Relevancia para audiencia</li>
                                        <li className="text-sm">Organización lógica</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Producción (8%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Calidad del audio</li>
                                        <li className="text-sm">Claridad en narración</li>
                                        <li className="text-sm">Edición profesional</li>
                                        <li className="text-sm">Duración apropiada</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Trabajo en Equipo (7%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Colaboración efectiva</li>
                                        <li className="text-sm">Cumplimiento de roles</li>
                                        <li className="text-sm">Puntualidad</li>
                                        <li className="text-sm">Organización</li>
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

export default PodcastProject;