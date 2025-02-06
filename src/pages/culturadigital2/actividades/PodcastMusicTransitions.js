import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import useDarkMode from '../../../hooks/useDarkMode';
import DarkModeToggle from '../../../components/DarkModeToggle';

const PodcastMusicTransitions = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const [guidelines, setGuidelines] = useState([
        {
            category: "Música de Fondo",
            tasks: [
                { id: "mus1", text: "Explorar biblioteca de música de Anchor", completed: false },
                { id: "mus2", text: "Seleccionar tracks apropiados para cada sección", completed: false },
                { id: "mus3", text: "Ajustar niveles de música de fondo (-20dB bajo la voz)", completed: false },
                { id: "mus4", text: "Verificar que la música no interfiere con el diálogo", completed: false }
            ]
        },
        {
            category: "Transiciones",
            tasks: [
                { id: "trans1", text: "Identificar puntos de transición en el contenido", completed: false },
                { id: "trans2", text: "Seleccionar efectos de transición apropiados", completed: false },
                { id: "trans3", text: "Implementar transiciones entre segmentos", completed: false },
                { id: "trans4", text: "Revisar fluidez de transiciones", completed: false }
            ]
        },
        {
            category: "Mezcla Final",
            tasks: [
                { id: "mix1", text: "Balancear niveles entre voz, música y efectos", completed: false },
                { id: "mix2", text: "Verificar consistencia de volumen", completed: false },
                { id: "mix3", text: "Exportar versión preliminar para revisión", completed: false },
                { id: "mix4", text: "Realizar ajustes finales según retroalimentación", completed: false }
            ]
        }
    ]);

    const [audioLevels] = useState([
        {
            elemento: "Voz Principal",
            niveles: [
                "Nivel promedio: -12dB",
                "Picos máximos: -6dB",
                "Compresión suave: 2:1",
                "EQ: Realce vocal (2-4kHz)"
            ]
        },
        {
            elemento: "Música de Fondo",
            niveles: [
                "20dB bajo la voz principal",
                "Ducking automático",
                "Fade in/out: 2-3 segundos",
                "EQ: Corte bajo 200Hz"
            ]
        },
        {
            elemento: "Transiciones",
            niveles: [
                "Duración: 1-3 segundos",
                "Nivel igual a música",
                "Crossfade suave",
                "Sin saturación"
            ]
        }
    ]);

    const [musicGuide] = useState([
        {
            tipo: "Intro/Outro",
            recomendaciones: [
                "Energética y memorable",
                "Duración: 15-30 segundos",
                "Fade in/out gradual",
                "Tema consistente con contenido"
            ]
        },
        {
            tipo: "Fondo",
            recomendaciones: [
                "Ritmo suave y no intrusivo",
                "Sin letra o vocal",
                "Loop sin cambios bruscos",
                "Volumen controlado"
            ]
        },
        {
            tipo: "Transiciones",
            recomendaciones: [
                "Efectos cortos y claros",
                "Coherentes con el tema",
                "Variedad limitada",
                "Timing preciso"
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
                        <button
                            onClick={() => navigate('/cultura-digital-2')}
                            className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} 
                                font-medium transition-colors duration-300`}
                        >
                            ← Regresar a Cultura Digital 2
                        </button>
                        <div className="flex items-center space-x-4">
                            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Música y Transiciones del Podcast
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
                            Fase de Post-Producción: Música y Transiciones
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert className="mb-6">
                            <AlertTitle>Valor de la Evidencia: 15% de la Calificación Final</AlertTitle>
                            <AlertDescription>
                                Implementación de música y transiciones utilizando la biblioteca de Anchor
                                para mejorar la calidad del podcast.
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

                        {/* Niveles de Audio */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Niveles de Audio
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {audioLevels.map((level) => (
                                    <Card key={level.elemento} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{level.elemento}</h4>
                                        <ul className="list-disc pl-4 mt-2">
                                            {level.niveles.map((nivel, index) => (
                                                <li key={index} className="text-sm">{nivel}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Guía de Música */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Guía de Música y Efectos
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {musicGuide.map((guide) => (
                                    <Card key={guide.tipo} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{guide.tipo}</h4>
                                        <ul className="list-disc pl-4 mt-2">
                                            {guide.recomendaciones.map((rec, index) => (
                                                <li key={index} className="text-sm">{rec}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Criterios de Evaluación */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Criterios de Evaluación (15%)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Música (6%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Selección apropiada</li>
                                        <li className="text-sm">Balance con la voz</li>
                                        <li className="text-sm">Uso efectivo</li>
                                        <li className="text-sm">Coherencia temática</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Transiciones (5%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Fluidez</li>
                                        <li className="text-sm">Timing</li>
                                        <li className="text-sm">Creatividad</li>
                                        <li className="text-sm">Consistencia</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Mezcla (4%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Balance general</li>
                                        <li className="text-sm">Niveles correctos</li>
                                        <li className="text-sm">Claridad</li>
                                        <li className="text-sm">Profesionalismo</li>
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

export default PodcastMusicTransitions;