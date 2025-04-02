import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import useDarkMode from '../../../hooks/useDarkMode';
import DarkModeToggle from '../../../components/DarkModeToggle';
import { Checkbox } from "../../../components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';
import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert";

const MultimediaIntegration = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const [guidelines, setGuidelines] = useState([
        {
            category: "Imágenes",
            tasks: [
                { id: "img1", text: "Optimizar imágenes para carga rápida (máximo 1MB)", completed: false },
                { id: "img2", text: "Incluir texto alternativo descriptivo", completed: false },
                { id: "img3", text: "Mantener proporción y calidad visual", completed: false },
                { id: "img4", text: "Usar formatos apropiados (JPG para fotos, PNG para gráficos)", completed: false }
            ]
        },
        {
            category: "Videos",
            tasks: [
                { id: "vid1", text: "Incrustar videos de manera responsiva", completed: false },
                { id: "vid2", text: "Incluir subtítulos o transcripciones", completed: false },
                { id: "vid3", text: "Verificar reproducción en diferentes dispositivos", completed: false },
                { id: "vid4", text: "Optimizar calidad vs. tiempo de carga", completed: false }
            ]
        },
        {
            category: "Interactividad",
            tasks: [
                { id: "int1", text: "Implementar elementos interactivos relevantes", completed: false },
                { id: "int2", text: "Asegurar funcionamiento en todos los navegadores", completed: false },
                { id: "int3", text: "Incluir instrucciones de uso claras", completed: false },
                { id: "int4", text: "Verificar accesibilidad", completed: false }
            ]
        }
    ]);

    const [mediaSpecs] = useState([
        {
            type: "Imágenes",
            specs: [
                "Resolución mínima: 800x600px",
                "Formato: JPG/PNG",
                "Tamaño máximo: 1MB",
                "Proporción aspecto: 16:9 o 4:3"
            ]
        },
        {
            type: "Videos",
            specs: [
                "Duración máxima: 5 minutos",
                "Resolución: 720p mínimo",
                "Formato: MP4",
                "Audio: clara narración"
            ]
        },
        {
            type: "Interactivos",
            specs: [
                "Compatible con móviles",
                "Tiempo carga: <3 segundos",
                "Controles intuitivos",
                "Retroalimentación visual"
            ]
        }
    ]);

    const handleTaskCompletion = (categoryIndex, taskId, completed) => {
        const updatedGuidelines = guidelines.map((category, idx) => {
            if (idx === categoryIndex) {
                const updatedTasks = category.tasks.map(task =>
                    task.id === taskId ? { ...task, completed } : task
                );
                return { ...category, tasks: updatedTasks };
            }
            return category;
        });
        setGuidelines(updatedGuidelines);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <button
                            onClick={() => {
  const savedState = sessionStorage.getItem('lastAsignaturaPath');
  if (savedState) {
    window.location.href = '/#' + savedState;
  } else {
    navigate('/cultura-digital-2?asignatura=culturadigital2&tab=1&page=0&fase=0');
  }
}}
                            className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                                } font-medium transition-colors duration-300`}
                        >
                            ← Regresar a Cultura Digital 2
                        </button>
                        <div className="flex items-center space-x-4">
                            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Integración de Recursos Multimedia
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
                            Guía de Integración Multimedia
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert className="mb-6">
                            <AlertTitle>Valor de la Evidencia: 15% de la Calificación Final</AlertTitle>
                            <AlertDescription>
                                Integración efectiva de recursos multimedia en la Wiki Educativa sobre
                                Herramientas Digitales para Proyectos Escolares.
                            </AlertDescription>
                        </Alert>

                        {/* Lista de Verificación */}
                        <div className="mb-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Lista de Verificación</h3>
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

                        {/* Especificaciones Técnicas */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Especificaciones Técnicas
                            </h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className={`font-semibold px-4 py-2 ${darkMode ? 'text-white' : ''}`}>
                                            Tipo de Medio</TableHead>
                                        <TableHead className={`font-semibold px-4 py-2 ${darkMode ? 'text-white' : ''}`}>
                                            Especificaciones</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mediaSpecs.map((spec) => (
                                        <TableRow key={spec.type}>
                                            <TableCell className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}>
                                                {spec.type}</TableCell>
                                            <TableCell className={`px-4 py-2 border ${darkMode ? 'text-white' : ''}`}>
                                                <ul className={`list-disc pl-4 ${darkMode ? 'text-white' : ''}`}>
                                                    {spec.specs.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        {/* Criterios de Evaluación */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Criterios de Evaluación (15%)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Calidad (6%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Resolución apropiada</li>
                                        <li className="text-sm">Claridad del contenido</li>
                                        <li className="text-sm">Optimización técnica</li>
                                        <li className="text-sm">Relevancia educativa</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Integración (5%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Ubicación estratégica</li>
                                        <li className="text-sm">Coherencia con contenido</li>
                                        <li className="text-sm">Funcionamiento correcto</li>
                                        <li className="text-sm">Accesibilidad</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Interactividad (4%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Facilidad de uso</li>
                                        <li className="text-sm">Retroalimentación clara</li>
                                        <li className="text-sm">Compatibilidad</li>
                                        <li className="text-sm">Valor educativo</li>
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

export default MultimediaIntegration;