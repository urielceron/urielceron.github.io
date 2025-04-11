import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import useDarkMode from '../../../hooks/useDarkMode';
import DarkModeToggle from '../../../components/DarkModeToggle';
import { Checkbox } from "../../../components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert";
import BackButton from '../../../components/BackButton';

const WikiContentQuality = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const [teamMembers, setTeamMembers] = useState([
        {
            id: 1,
            role: "Coordinador",
            name: "",
            responsibilities: [
                { id: "coord1", text: "Supervisar el progreso general del proyecto", completed: false },
                { id: "coord2", text: "Coordinar reuniones y establecer fechas límite", completed: false },
                { id: "coord3", text: "Asegurar la comunicación efectiva entre miembros", completed: false },
                { id: "coord4", text: "Revisar y aprobar cambios importantes", completed: false }
            ]
        },
        {
            id: 2,
            role: "Investigador 1",
            responsibilities: [
                { id: "inv1_1", text: "Investigar herramientas 1-4 (Ejemplos: Zoom, Canva, Miro, Trello)", completed: false },
                { id: "inv1_2", text: "Documentar costos, licencias y accesibilidad", completed: false },
                { id: "inv1_3", text: "Analizar casos de uso educativo y eficiencia", completed: false },
                { id: "inv1_4", text: "Compilar ventajas y desventajas", completed: false }
            ]
        },
        {
            id: 3,
            role: "Investigador 2",
            responsibilities: [
                { id: "inv2_1", text: "Investigar herramientas 5-8 (Ejemplos: Notion, Padlet, Mentimeter, Google Drive)", completed: false },
                { id: "inv2_2", text: "Documentar costos, licencias y accesibilidad", completed: false },
                { id: "inv2_3", text: "Analizar casos de uso educativo y eficiencia", completed: false },
                { id: "inv2_4", text: "Compilar ventajas y desventajas", completed: false }
            ]
        },
        {
            id: 4,
            role: "Diseñador 1",
            responsibilities: [
                { id: "dis1_1", text: "Crear plantillas para fichas técnicas de herramientas", completed: false },
                { id: "dis1_2", text: "Diseñar secciones: descripción, costos, licencias", completed: false },
                { id: "dis1_3", text: "Implementar espacios para multimedia", completed: false },
                { id: "dis1_4", text: "Optimizar visualización de ventajas/desventajas", completed: false }
            ]
        },
        {
            id: 5,
            role: "Diseñador 2",
            name: "",
            responsibilities: [
                { id: "dis2_1", text: "Diseñar páginas secundarias", completed: false },
                { id: "dis2_2", text: "Mantener consistencia visual", completed: false },
                { id: "dis2_3", text: "Crear elementos gráficos necesarios", completed: false },
                { id: "dis2_4", text: "Optimizar estructura de contenido", completed: false }
            ]
        },
        {
            id: 6,
            role: "Editor 1",
            name: "",
            responsibilities: [
                { id: "ed1_1", text: "Editar contenido de páginas principales", completed: false },
                { id: "ed1_2", text: "Asegurar coherencia en la redacción", completed: false },
                { id: "ed1_3", text: "Formatear contenido según estándares", completed: false },
                { id: "ed1_4", text: "Aplicar estilo de escritura consistente", completed: false }
            ]
        },
        {
            id: 7,
            role: "Editor 2",
            name: "",
            responsibilities: [
                { id: "ed2_1", text: "Editar contenido de páginas secundarias", completed: false },
                { id: "ed2_2", text: "Revisar gramática y ortografía", completed: false },
                { id: "ed2_3", text: "Mantener formato APA en referencias", completed: false },
                { id: "ed2_4", text: "Verificar enlaces y recursos", completed: false }
            ]
        },
        {
            id: 8,
            role: "Revisor",
            name: "",
            responsibilities: [
                { id: "rev_1", text: "Realizar control de calidad general", completed: false },
                { id: "rev_2", text: "Verificar cumplimiento de criterios", completed: false },
                { id: "rev_3", text: "Proporcionar retroalimentación", completed: false },
                { id: "rev_4", text: "Documentar proceso de revisión", completed: false }
            ]
        }
    ]);

    const contentStructure = [
        {
            section: "Ficha Técnica",
            elements: [
                "Nombre de la herramienta",
                "URL de acceso",
                "Tipo de licencia y costos",
                "Requisitos técnicos",
                "Video/imagen demostrativa"
            ]
        },
        {
            section: "Análisis",
            elements: [
                "Descripción general",
                "Funcionalidades principales",
                "Casos de uso educativo",
                "Ventajas y desventajas",
                "Ejemplos prácticos"
            ]
        }
    ];

    const [collaborativeWork, setCollaborativeWork] = useState([
        {
            week: 1,
            activities: [
                { role: "Coordinador", task: "Crear cronograma inicial y distribuir roles", status: "Pendiente", date: "" },
                { role: "Diseñador 1", task: "Establecer estructura base en Google Sites", status: "Pendiente", date: "" },
                { role: "Investigador 1 y 2", task: "Iniciar investigación de herramientas", status: "Pendiente", date: "" }
            ]
        },
        {
            week: 2,
            activities: [
                { role: "Diseñador 2", task: "Implementar plantillas de páginas", status: "Pendiente", date: "" },
                { role: "Editor 1 y 2", task: "Comenzar edición de contenido inicial", status: "Pendiente", date: "" },
                { role: "Revisor", task: "Primera revisión de estructura", status: "Pendiente", date: "" }
            ]
        }
    ]);
    const handleTaskCompletion = (memberId, taskId, completed) => {
        setTeamMembers(members =>
            members.map(member => {
                if (member.id === memberId) {
                    return {
                        ...member,
                        responsibilities: member.responsibilities.map(task => {
                            if (task.id === taskId) {
                                return { ...task, completed };
                            }
                            return task;
                        })
                    };
                }
                return member;
            })
        );
    };

    const handleWorkUpdate = (weekIndex, activityIndex, field, value) => {
        setCollaborativeWork(prevWork =>
            prevWork.map((week, wIndex) => {
                if (wIndex === weekIndex) {
                    const updatedActivities = week.activities.map((activity, aIndex) => {
                        if (aIndex === activityIndex) {
                            return { ...activity, [field]: value };
                        }
                        return activity;
                    });
                    return { ...week, activities: updatedActivities };
                }
                return week;
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
                                Calidad y Organización del Contenido Wiki
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
                            Calidad y Organización del Contenido Wiki
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert className="mb-6">
                            <AlertTitle>Valor de la Evidencia: 25% de la Calificación Final</AlertTitle>
                            <AlertDescription>
                                Organización del equipo y responsabilidades para el desarrollo de la
                                Wiki Educativa sobre Herramientas Digitales para Proyectos Escolares.
                            </AlertDescription>
                        </Alert>

                        {/* Roles y Responsabilidades con Checkboxes */}
                        <div className="mb-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Roles y Responsabilidades</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {teamMembers.map((member) => (
                                    <Card key={member.id} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{member.role}</h4>
                                        <div className="mt-2 space-y-2">
                                            {member.responsibilities.map((task) => (
                                                <div key={task.id} className="flex items-start space-x-2">
                                                    <Checkbox
                                                        id={task.id}
                                                        checked={task.completed}
                                                        onChange={(e) => handleTaskCompletion(member.id, task.id, e.target.checked)}
                                                        className="mt-1"
                                                    />
                                                    <label
                                                        htmlFor={task.id}
                                                        className={`text-sm leading-relaxed cursor-pointer ${darkMode ? 'text-white' : ''}`}
                                                    >
                                                        {task.text}  {/* Cambiar de task a task.text */}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Tabla de Trabajo Colaborativo */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Registro de Trabajo Colaborativo</h3>
                            <div className="overflow-x-auto">
                                <table>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 text-left border">Semana</th>
                                            <th className="px-4 py-2 text-left border">Rol</th>
                                            <th className="px-4 py-2 text-left border">Actividad</th>
                                            <th className="px-4 py-2 text-left border">Estado</th>
                                            <th className="px-4 py-2 text-left border">Fecha</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {collaborativeWork.map((week, weekIndex) => (
                                            week.activities.map((activity, idx) => (
                                                <tr key={`${week.week}-${idx}`}>
                                                    {idx === 0 && (
                                                        <td rowSpan={week.activities.length} className={`px-4 py-2 border align-middle ${darkMode ? 'text-white' : ''}`}>
                                                            Semana {week.week}
                                                        </td>
                                                    )}
                                                    <td className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}>{activity.role}</td>
                                                    <td className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}>{activity.task}</td>
                                                    <td className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}>
                                                        <select
                                                            value={activity.status}
                                                            onChange={(e) => handleWorkUpdate(weekIndex, idx, 'status', e.target.value)}
                                                            className={`w-full bg-transparent ${darkMode ? 'text-white' : ''}`}
                                                        >
                                                            <option value="Pendiente">Pendiente</option>
                                                            <option value="En Proceso">En Proceso</option>
                                                            <option value="Completado">Completado</option>
                                                        </select>
                                                    </td>
                                                    <td className="px-4 py-2 border">
                                                        <input
                                                            type="date"
                                                            value={activity.date}
                                                            onChange={(e) => handleWorkUpdate(weekIndex, idx, 'date', e.target.value)}
                                                            className={`w-full bg-transparent ${darkMode ? 'text-white' : ''}`}
                                                        />
                                                    </td>
                                                </tr>
                                            ))
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Estructura de Contenido */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Estructura de Contenido por Herramienta
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {contentStructure.map((section) => (
                                    <Card key={section.section} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{section.section}</h4>
                                        <ul className="list-disc pl-4 mt-2">
                                            {section.elements.map((item, index) => (
                                                <li key={index} className="text-sm">{item}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Criterios de Evaluación */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Criterios de Evaluación (25%)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Contenido (10%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Precisión y relevancia</li>
                                        <li className="text-sm">Profundidad del análisis</li>
                                        <li className="text-sm">Ejemplos prácticos</li>
                                        <li className="text-sm">Referencias correctas</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Estructura (8%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Organización lógica</li>
                                        <li className="text-sm">Navegación intuitiva</li>
                                        <li className="text-sm">Jerarquía clara</li>
                                        <li className="text-sm">Consistencia</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Gestión (7%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Documentación</li>
                                        <li className="text-sm">Distribución del trabajo</li>
                                        <li className="text-sm">Cumplimiento de fechas</li>
                                        <li className="text-sm">Calidad de revisiones</li>
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

export default WikiContentQuality;