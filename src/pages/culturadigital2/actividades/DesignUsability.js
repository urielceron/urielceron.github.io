import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert";
import { Checkbox } from "../../../components/ui/checkbox";
import useDarkMode from '../../../hooks/useDarkMode';
import DarkModeToggle from '../../../components/DarkModeToggle';
import BackButton from '../../../components/BackButton';

const DesignUsability = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [guidelines, setGuidelines] = useState([
    {
      category: "Consistencia Visual",
      tasks: [
        { id: "vis1", text: "Usar la misma paleta de colores en todas las páginas", completed: false },
        { id: "vis2", text: "Mantener tipografía consistente para títulos y contenido", completed: false },
        { id: "vis3", text: "Aplicar espaciado y márgenes uniformes", completed: false },
        { id: "vis4", text: "Implementar un sistema de íconos coherente", completed: false }
      ]
    },
    {
      category: "Navegación",
      tasks: [
        { id: "nav1", text: "Crear menú principal claro y accesible", completed: false },
        { id: "nav2", text: "Incluir mapa del sitio visible", completed: false },
        { id: "nav3", text: "Mantener estructura jerárquica de páginas", completed: false },
        { id: "nav4", text: "Implementar breadcrumbs para ubicación", completed: false }
      ]
    },
    {
      category: "Responsive Design",
      tasks: [
        { id: "res1", text: "Verificar visualización en dispositivos móviles", completed: false },
        { id: "res2", text: "Adaptar imágenes para diferentes pantallas", completed: false },
        { id: "res3", text: "Ajustar menús para versión móvil", completed: false },
        { id: "res4", text: "Probar interactividad en diferentes dispositivos", completed: false }
      ]
    }
  ]);

  const [evaluationCriteria] = useState([
    {
      aspect: "Diseño Visual (8%)",
      criteria: [
        "Paleta de colores apropiada y consistente",
        "Tipografía legible y jerárquica",
        "Balance visual y uso efectivo del espacio",
        "Coherencia en elementos gráficos"
      ]
    },
    {
      aspect: "Navegación (7%)",
      criteria: [
        "Estructura clara y lógica",
        "Facilidad de navegación entre secciones",
        "Menús intuitivos y accesibles",
        "Orientación clara del usuario"
      ]
    },
    {
      aspect: "Responsive (5%)",
      criteria: [
        "Adaptabilidad a diferentes dispositivos",
        "Funcionamiento correcto en móviles",
        "Optimización de recursos visuales",
        "Experiencia consistente cross-device"
      ]
    }
  ]);

  const [bestPractices] = useState([
    {
      title: "Jerarquía Visual",
      description: "Establece una clara jerarquía usando tamaños, colores y espaciado para guiar al usuario."
    },
    {
      title: "Legibilidad",
      description: "Asegura suficiente contraste texto-fondo y tamaños de fuente apropiados."
    },
    {
      title: "Consistencia",
      description: "Mantén patrones de diseño uniformes en toda la wiki para una experiencia coherente."
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
            <BackButton />
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Diseño y Usabilidad de la Plataforma
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
              Guía de Diseño y Usabilidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6">
              <AlertTitle>Valor de la Evidencia: 20% de la Calificación Final</AlertTitle>
              <AlertDescription>
                Implementación de diseño visual y navegación para la Wiki Educativa
                sobre Herramientas Digitales para Proyectos Escolares.
              </AlertDescription>
            </Alert>

            {/* Lista de Verificación de Diseño */}
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

            {/* Criterios de Evaluación */}
            <div className="mt-8">
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                Criterios de Evaluación (20%)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {evaluationCriteria.map((criterion) => (
                  <Card key={criterion.aspect} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                    <h4 className="font-semibold text-primary">{criterion.aspect}</h4>
                    <ul className="list-disc pl-4 mt-2">
                      {criterion.criteria.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Mejores Prácticas */}
            <div className="mt-8">
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>
                Mejores Prácticas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bestPractices.map((practice) => (
                  <Card key={practice.title} className={`p-4 ${darkMode ? 'text-white' : ''}`}>
                    <h4 className="font-semibold text-primary">{practice.title}</h4>
                    <p className="text-sm mt-2">{practice.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DesignUsability;