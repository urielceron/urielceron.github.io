import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import useDarkMode from '../../../hooks/useDarkMode';
import DarkModeToggle from '../../../components/DarkModeToggle';
import BackButton from '../../../components/BackButton';

const PodcastProduction = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const [guidelines, setGuidelines] = useState([
        {
            category: "Pre-Producción",
            tasks: [
                { id: "pre1", text: "Configurar espacio silencioso para grabación", completed: false },
                { id: "pre2", text: "Verificar calidad de micrófono y auriculares", completed: false },
                { id: "pre3", text: "Realizar pruebas de niveles de audio", completed: false },
                { id: "pre4", text: "Preparar guion final para grabación", completed: false }
            ]
        },
        {
            category: "Grabación",
            tasks: [
                { id: "rec1", text: "Grabar segmentos individuales en Anchor", completed: false },
                { id: "rec2", text: "Verificar calidad de cada grabación", completed: false },
                { id: "rec3", text: "Regrabar segmentos si es necesario", completed: false },
                { id: "rec4", text: "Organizar archivos de audio por secciones", completed: false }
            ]
        },
        {
            category: "Edición",
            tasks: [
                { id: "edit1", text: "Realizar cortes y ajustes básicos", completed: false },
                { id: "edit2", text: "Ajustar niveles de volumen", completed: false },
                { id: "edit3", text: "Añadir transiciones entre segmentos", completed: false },
                { id: "edit4", text: "Exportar versión preliminar", completed: false }
            ]
        }
    ]);

    const [technicalSpecs] = useState([
        {
            title: "Configuración de Audio",
            specs: [
                "Formato: MP3/WAV",
                "Frecuencia: 44.1 kHz",
                "Bit Rate: 128-192 kbps",
                "Canales: Stereo"
            ]
        },
        {
            title: "Niveles de Audio",
            specs: [
                "Volumen promedio: -12 dB",
                "Picos máximos: -6 dB",
                "Ruido de fondo: < -60 dB",
                "Normalización: -0.1 dB"
            ]
        },
        {
            title: "Ambiente de Grabación",
            specs: [
                "Espacio cerrado y silencioso",
                "Tratamiento acústico básico",
                "Distancia al micrófono: 15-20 cm",
                "Uso de pop filter recomendado"
            ]
        }
    ]);

    const [editingTools] = useState([
        {
            tool: "Anchor",
            features: [
                "Grabación directa desde móvil",
                "Edición básica de segmentos",
                "Organización de episodios",
                "Publicación directa a Spotify"
            ]
        },
        {
            tool: "Riverside.fm",
            features: [
                "Grabación remota de alta calidad",
                "Pistas separadas por participante",
                "Respaldo local automático",
                "Control de calidad en tiempo real"
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
                                Producción y Edición Técnica de Audio
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
                            Fase de Producción: Grabación y Edición
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert className="mb-6">
                            <AlertTitle>Valor de la Evidencia: 20% de la Calificación Final</AlertTitle>
                            <AlertDescription>
                                Producción y edición técnica del podcast utilizando Anchor y Riverside.fm
                            </AlertDescription>
                        </Alert>

                        {/* Lista de Verificación */}
                        <div className="mb-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Lista de Verificación Técnica
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

                        {/* Especificaciones Técnicas */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Especificaciones Técnicas
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {technicalSpecs.map((spec) => (
                                    <Card key={spec.title} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{spec.title}</h4>
                                        <ul className="list-disc pl-4 mt-2">
                                            {spec.specs.map((item, index) => (
                                                <li key={index} className="text-sm">{item}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Herramientas de Edición */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Herramientas de Edición
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {editingTools.map((tool) => (
                                    <Card key={tool.tool} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                        <h4 className="font-semibold text-primary">{tool.tool}</h4>
                                        <ul className="list-disc pl-4 mt-2">
                                            {tool.features.map((feature, index) => (
                                                <li key={index} className="text-sm">{feature}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Criterios de Evaluación */}
                        <div className="mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                                Criterios de Evaluación (20%)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Calidad de Audio (8%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Claridad de la grabación</li>
                                        <li className="text-sm">Niveles de audio consistentes</li>
                                        <li className="text-sm">Ausencia de ruidos externos</li>
                                        <li className="text-sm">Balance de voces</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Edición (7%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Transiciones suaves</li>
                                        <li className="text-sm">Cortes precisos</li>
                                        <li className="text-sm">Uso de efectos apropiados</li>
                                        <li className="text-sm">Estructura coherente</li>
                                    </ul>
                                </Card>
                                <Card className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                                    <h4 className="font-semibold text-primary">Aspectos Técnicos (5%)</h4>
                                    <ul className="list-disc pl-4 mt-2">
                                        <li className="text-sm">Formato correcto</li>
                                        <li className="text-sm">Duración adecuada</li>
                                        <li className="text-sm">Metadata completa</li>
                                        <li className="text-sm">Exportación correcta</li>
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

export default PodcastProduction;