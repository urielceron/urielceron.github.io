import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useDarkMode from '../../../hooks/useDarkMode';
import DarkModeToggle from '../../../components/DarkModeToggle';
import BackButton from '../../../components/BackButton';

const PodcastCollaboration = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const [guidelines, setGuidelines] = useState([
        {
            category: "Revisión de Contenido",
            tasks: [
                { id: "rev1", text: "Realizar revisión cruzada entre miembros del equipo", completed: false },
                { id: "rev2", text: "Documentar observaciones y sugerencias", completed: false },
                { id: "rev3", text: "Implementar mejoras sugeridas", completed: false },
                { id: "rev4", text: "Verificar cambios implementados", completed: false }
            ]
        },
        {
            category: "Colaboración",
            tasks: [
                { id: "col1", text: "Mantener comunicación efectiva en el equipo", completed: false },
                { id: "col2", text: "Registrar acuerdos y decisiones", completed: false },
                { id: "col3", text: "Coordinar tareas pendientes", completed: false },
                { id: "col4", text: "Documentar contribuciones individuales", completed: false }
            ]
        },
        {
            category: "Documentación",
            tasks: [
                { id: "doc1", text: "Registrar proceso de trabajo en equipo", completed: false },
                { id: "doc2", text: "Documentar aprendizajes y desafíos", completed: false },
                { id: "doc3", text: "Compilar evidencias de colaboración", completed: false },
                { id: "doc4", text: "Preparar reporte final de equipo", completed: false }
            ]
        }
    ]);

    const [teamFeedback] = useState([
        {
            aspecto: "Técnico",
            criterios: [
                "Calidad del audio",
                "Uso de música y efectos",
                "Edición y transiciones",
                "Duración y ritmo"
            ]
        },
        {
            aspecto: "Contenido",
            criterios: [
                "Claridad del mensaje",
                "Organización de ideas",
                "Relevancia de información",
                "Engagement del oyente"
            ]
        },
        {
            aspecto: "Presentación",
            criterios: [
                "Locución y dicción",
                "Fluidez narrativa",
                "Estilo y tono",
                "Profesionalismo"
            ]
        }
    ]);

    const [collaborationTools] = useState([
        {
            herramienta: "Google Drive",
            usos: [
                "Almacenamiento de archivos",
                "Documentos compartidos",
                "Control de versiones",
                "Retroalimentación en tiempo real"
            ]
        },
        {
            herramienta: "Google Meet",
            usos: [
                "Reuniones de equipo",
                "Revisiones conjuntas",
                "Sesiones de feedback",
                "Coordinación de tareas"
            ]
        },
        {
            herramienta: "Trello/Asana",
            usos: [
                "Seguimiento de tareas",
                "Asignación de responsabilidades",
                "Fechas límite",
                "Estado del proyecto"
            ]
        }
    ]);

    const [teamProgress, setTeamProgress] = useState([
        {
            fecha: "",
            actividad: "Revisión inicial",
            responsable: "",
            estado: "Pendiente",
            comentarios: ""
        },
        {
            fecha: "",
            actividad: "Implementación de mejoras",
            responsable: "",
            estado: "Pendiente",
            comentarios: ""
        },
        {
            fecha: "",
            actividad: "Revisión final",
            responsable: "",
            estado: "Pendiente",
            comentarios: ""
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

    const handleProgressUpdate = (index, field, value) => {
        setTeamProgress(prev =>
            prev.map((item, idx) =>
                idx === index ? { ...item, [field]: value } : item
            )
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
                                Trabajo Colaborativo y Gestión
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
                            Fase Final: Colaboración y Gestión del Equipo
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert className="mb-6">
                            <AlertTitle>Valor de la Evidencia: 10% de la Calificación Final</AlertTitle>
                            <AlertDescription>
                                Evaluación del trabajo colaborativo y gestión del equipo en la
                                producción del podcast educativo.
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

                        {/* Registro de Progreso */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Registro de Progreso
                            </h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Fecha</TableHead>
                                        <TableHead>Actividad</TableHead>
                                        <TableHead>Responsable</TableHead>
                                        <TableHead>Estado</TableHead>
                                        <TableHead>Comentarios</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {teamProgress.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <input
                                                    type="date"
                                                    className="w-full bg-transparent border rounded p-1"
                                                    value={item.fecha}
                                                    onChange={(e) => handleProgressUpdate(index, 'fecha', e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell>{item.actividad}</TableCell>
                                            <TableCell>
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent border rounded p-1"
                                                    value={item.responsable}
                                                    onChange={(e) => handleProgressUpdate(index, 'responsable', e.target.value)}
                                                    placeholder="Nombre del responsable"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <select
                                                    className="w-full bg-transparent border rounded p-1"
                                                    value={item.estado}
                                                    onChange={(e) => handleProgressUpdate(index, 'estado', e.target.value)}
                                                >
                                                    <option>Pendiente</option>
                                                    <option>En Proceso</option>
                                                    <option>Completado</option>
                                                </select>
                                            </TableCell>
                                            <TableCell>
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent border rounded p-1"
                                                    value={item.comentarios}
                                                    onChange={(e) => handleProgressUpdate(index, 'comentarios', e.target.value)}
                                                    placeholder="Agregar comentarios..."
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        {/* Criterios de Feedback */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Criterios de Feedback
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {teamFeedback.map((feedback) => (
                                    <Card key={feedback.aspecto} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{feedback.aspecto}</h4>
                                        <ul className="list-disc pl-4 mt-2">
                                            {feedback.criterios.map((criterio, index) => (
                                                <li key={index} className="text-sm">{criterio}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Herramientas de Colaboración */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Herramientas de Colaboración
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {collaborationTools.map((tool) => (
                                    <Card key={tool.herramienta} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{tool.herramienta}</h4>
                                        <ul className="list-disc pl-4 mt-2">
                                            {tool.usos.map((uso, index) => (
                                                <li key={index} className="text-sm">{uso}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Criterios de Evaluación */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Criterios de Evaluación (10%)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Participación (4%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Contribución activa</li>
                                        <li className="text-sm">Cumplimiento de rol</li>
                                        <li className="text-sm">Comunicación efectiva</li>
                                        <li className="text-sm">Iniciativa</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Gestión (3%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Organización</li>
                                        <li className="text-sm">Seguimiento</li>
                                        <li className="text-sm">Documentación</li>
                                        <li className="text-sm">Resolución de problemas</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Colaboración (3%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Trabajo en equipo</li>
                                        <li className="text-sm">Retroalimentación</li>
                                        <li className="text-sm">Apoyo mutuo</li>
                                        <li className="text-sm">Responsabilidad compartida</li>
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

export default PodcastCollaboration;