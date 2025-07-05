import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Users, Download, FileSpreadsheet } from 'lucide-react';
import DarkModeToggle from '../../components/DarkModeToggle';
import useDarkMode from '../../hooks/useDarkMode';

const MoodleChecklist = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [checkedItems, setCheckedItems] = useState({});
  const [teamData, setTeamData] = useState({
    mentor: '',
    aprendiz: ''
  });

  // Datos de las actividades organizadas por día según tu especificación optimizada
  const activitiesData = {
    "DÍA 1": {
      total: 16,
      esenciales: 10,
      activities: [
        { id: 'act1', name: 'Crear cuenta docente', type: 'presencial', essential: true },
        { id: 'act2', name: 'Crear cuenta estudiante', type: 'presencial', essential: true },
        { id: 'act3', name: 'Navegación dual', type: 'presencial', essential: true },
        { id: 'act4', name: 'Validación cruzada', type: 'presencial', essential: false },
        { id: 'act5', name: 'Curso básico del Mentor', type: 'presencial', essential: true },
        { id: 'act6', name: 'Curso básico del Aprendiz', type: 'presencial', essential: true },
        { id: 'act7', name: 'Crear secciones temáticas', type: 'presencial', essential: false },
        { id: 'act8', name: 'Vista previa como estudiante', type: 'presencial', essential: false },
        { id: 'act9', name: 'Inscripción manual', type: 'presencial', essential: true },
        { id: 'act10', name: 'Autoinscripción con clave', type: 'presencial', essential: true },
        { id: 'act11', name: 'Autoinscripción libre', type: 'presencial', essential: false },
        { id: 'act12', name: 'Documentar diferencias', type: 'presencial', essential: false },
        { id: 'act23', name: 'Personalización visual', type: 'presencial', essential: true },
        { id: 'hw1_day1', name: 'Exploración libre', type: 'casa', essential: true },
        { id: 'hw2_day1', name: 'Personalización avanzada', type: 'casa', essential: false },
        { id: 'hw3_day1', name: 'Documentación', type: 'casa', essential: false },
        { id: 'hw4_day1', name: 'Preparación día 2', type: 'casa', essential: true }
      ]
    },
    "DÍA 2": {
      total: 17,
      esenciales: 17,
      activities: [
        { id: 'act13', name: 'Prompts educativos básicos', type: 'presencial', essential: true },
        { id: 'act14', name: 'Generar primeras preguntas', type: 'presencial', essential: true },
        { id: 'act15', name: 'Validar y mejorar', type: 'presencial', essential: true },
        { id: 'act16', name: 'Formato Aiken', type: 'presencial', essential: true },
        { id: 'act17', name: 'Banco de 25 preguntas', type: 'presencial', essential: true },
        { id: 'act18', name: 'Prompts por dificultad', type: 'presencial', essential: true },
        { id: 'act19', name: 'Preguntas avanzadas', type: 'presencial', essential: true },
        { id: 'act20', name: 'Categorización', type: 'presencial', essential: true },
        { id: 'act21', name: 'Validación pedagógica', type: 'presencial', essential: true },
        { id: 'act22', name: 'Banco final 50 preguntas', type: 'presencial', essential: true },
        { id: 'act28', name: 'Examen básico (movido de día 3)', type: 'presencial', essential: true },
        { id: 'act29', name: 'Configuración avanzada', type: 'presencial', essential: true },
        { id: 'act30', name: 'Prueba como estudiante', type: 'presencial', essential: true },
        { id: 'hw1_day2', name: 'Banco expandido', type: 'casa', essential: true },
        { id: 'hw2_day2', name: 'IA para otras actividades', type: 'casa', essential: true },
        { id: 'hw3_day2', name: 'Organización avanzada', type: 'casa', essential: true },
        { id: 'hw4_day2', name: 'Preparación día 3', type: 'casa', essential: true },
        { id: 'exam1', name: 'Examen Formativo #1', type: 'examen', essential: true }
      ]
    },
    "DÍA 3": {
      total: 10,
      esenciales: 7,
      activities: [
        { id: 'act24', name: 'Importación masiva', type: 'presencial', essential: true },
        { id: 'act25', name: 'Resolución de errores', type: 'presencial', essential: true },
        { id: 'act26', name: 'Importación por categorías', type: 'presencial', essential: true },
        { id: 'act27', name: 'Crear estructura de categorías', type: 'presencial', essential: true },
        { id: 'act31', name: 'Análisis de resultados', type: 'presencial', essential: true },
        { id: 'hw1_day3', name: 'Múltiples exámenes', type: 'casa', essential: true },
        { id: 'hw2_day3', name: 'Banco organizado', type: 'casa', essential: true },
        { id: 'hw3_day3', name: 'Configuraciones', type: 'casa', essential: false },
        { id: 'hw4_day3', name: 'Documentación', type: 'casa', essential: false },
        { id: 'exam2', name: 'Examen Formativo #2', type: 'examen', essential: true }
      ]
    },
    "DÍA 4": {
      total: 12,
      esenciales: 8,
      activities: [
        { id: 'act32', name: 'Descarga e instalación SEB', type: 'presencial', essential: true },
        { id: 'act33', name: 'Configuración básica', type: 'presencial', essential: true },
        { id: 'act34', name: 'Primer examen con SEB', type: 'presencial', essential: true },
        { id: 'act35', name: 'Configuración avanzada', type: 'presencial', essential: true },
        { id: 'act36', name: 'Examen nivel ALTO', type: 'presencial', essential: true },
        { id: 'act37', name: 'Personalización SEB', type: 'presencial', essential: false },
        { id: 'act38', name: 'Preparación implementación', type: 'presencial', essential: true },
        { id: 'act39', name: 'Casos especiales', type: 'presencial', essential: false },
        { id: 'hw1_day4', name: 'Exámenes diversos', type: 'casa', essential: true },
        { id: 'hw2_day4', name: 'SEB para otros', type: 'casa', essential: false },
        { id: 'hw3_day4', name: 'Configuraciones óptimas', type: 'casa', essential: true },
        { id: 'hw4_day4', name: 'Manual técnico', type: 'casa', essential: false },
        { id: 'exam3', name: 'Examen Formativo #3', type: 'examen', essential: true }
      ]
    },
    "DÍA 5": {
      total: 14,
      esenciales: 11,
      activities: [
        { id: 'act40', name: 'Datos de prueba', type: 'presencial', essential: true },
        { id: 'act41', name: 'Perfiles de estudiantes', type: 'presencial', essential: true },
        { id: 'act42', name: 'Centro de calificaciones', type: 'presencial', essential: true },
        { id: 'act43', name: 'Estadísticas por pregunta', type: 'presencial', essential: true },
        { id: 'act44', name: 'Exportación de datos', type: 'presencial', essential: false },
        { id: 'act45', name: 'Reportes automáticos', type: 'presencial', essential: true },
        { id: 'act46', name: 'Análisis en Excel', type: 'presencial', essential: true },
        { id: 'act47', name: 'Plan de retroalimentación', type: 'presencial', essential: false },
        { id: 'act48', name: 'Demo del curso completo', type: 'presencial', essential: true },
        { id: 'act49', name: 'Intercambio mejores prácticas', type: 'presencial', essential: true },
        { id: 'hw1_day5', name: 'Curso para producción', type: 'casa', essential: true },
        { id: 'hw2_day5', name: 'Manual completo', type: 'casa', essential: true },
        { id: 'hw3_day5', name: 'Plan de implementación', type: 'casa', essential: true },
        { id: 'hw4_day5', name: 'Evaluación del curso', type: 'casa', essential: false },
        { id: 'final_presentation', name: 'Presentación Final', type: 'examen', essential: true },
        { id: 'coevaluation', name: 'Coevaluación', type: 'examen', essential: true }
      ]
    }
  };

  // Cargar datos guardados del localStorage
  useEffect(() => {
    try {
      const savedChecklist = localStorage.getItem('moodleChecklistProgress');
      const savedTeam = localStorage.getItem('moodleTeamData');

      if (savedChecklist) {
        setCheckedItems(JSON.parse(savedChecklist));
      }

      if (savedTeam) {
        setTeamData(JSON.parse(savedTeam));
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  }, []);

  // Guardar datos cuando cambien
  useEffect(() => {
    try {
      localStorage.setItem('moodleChecklistProgress', JSON.stringify(checkedItems));
    } catch (error) {
      console.error('Error saving checklist:', error);
    }
  }, [checkedItems]);

  useEffect(() => {
    try {
      localStorage.setItem('moodleTeamData', JSON.stringify(teamData));
    } catch (error) {
      console.error('Error saving team data:', error);
    }
  }, [teamData]);

  const handleVolver = () => {
    navigate('/moodle-course');
  };

  const handleCheckChange = (activityId) => {
    setCheckedItems(prev => ({
      ...prev,
      [activityId]: !prev[activityId]
    }));
  };

  const handleTeamChange = (field, value) => {
    setTeamData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'presencial': return '🏫';
      case 'casa': return '🏠';
      case 'examen': return '📝';
      default: return '📋';
    }
  };

  const getEssentialIcon = (essential) => {
    return essential ? '✅' : '❌';
  };

  const calculateProgress = () => {
    const totalActivities = Object.values(activitiesData).reduce((sum, day) => sum + day.activities.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((checkedCount / totalActivities) * 100);
  };

  const calculateDayProgress = (dayActivities) => {
    const dayChecked = dayActivities.filter(act => checkedItems[act.id]).length;
    return Math.round((dayChecked / dayActivities.length) * 100);
  };

  const exportToCSV = () => {
    // Crear contenido CSV como array de bytes UTF-8
    let csvContent = "";

    // Encabezados
    csvContent += "Día,Actividad,Tipo,Esencial,Estado,Mentor,Aprendiz\n";

    // Datos
    Object.keys(activitiesData).forEach(day => {
      activitiesData[day].activities.forEach(activity => {
        const estado = checkedItems[activity.id] ? 'Completada' : 'Pendiente';
        const esencial = activity.essential ? 'Sí' : 'No';
        csvContent += `"${day}","${activity.name}","${activity.type}","${esencial}","${estado}","${teamData.mentor}","${teamData.aprendiz}"\n`;
      });
    });

    // Crear Blob con UTF-8 BOM
    const BOM = '\uFEFF'; // Byte Order Mark para UTF-8
    const blob = new Blob([BOM + csvContent], {
      type: 'text/csv;charset=utf-8;'
    });

    // Crear enlace y descargar
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "lista_cotejo_moodle.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Limpiar objeto URL
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navegación */}
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleVolver}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              📚 Volver al Curso Completo
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Lista de Cotejo - Curso Moodle
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-8">
          <h1 className="text-3xl font-bold mb-2">📋 LISTA DE COTEJO - CURSO TALLER INTENSIVO</h1>
          <h2 className="text-xl text-blue-100 mb-4">MOODLE + SAFE EXAM BROWSER + IA</h2>
          <p className="text-blue-50">5 Días de Práctica Intensiva para Docentes</p>

          <div className="mt-4 bg-blue-700 rounded-lg p-4">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-blue-100">Progreso General:</span>
              <div className="flex-1 bg-blue-600 rounded-full h-3">
                <div
                  className="bg-green-400 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
              <span className="text-white font-bold">{calculateProgress()}%</span>
            </div>
          </div>
        </div>

        {/* Información del Equipo */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-8 shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
            <Users className="w-5 h-5" />
            Información del Equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Nombre del Mentor:
              </label>
              <input
                type="text"
                value={teamData.mentor}
                onChange={(e) => handleTeamChange('mentor', e.target.value)}
                placeholder="Ingresa el nombre del mentor"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''
                  }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Nombre del Aprendiz:
              </label>
              <input
                type="text"
                value={teamData.aprendiz}
                onChange={(e) => handleTeamChange('aprendiz', e.target.value)}
                placeholder="Ingresa el nombre del aprendiz"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''
                  }`}
              />
            </div>
          </div>
        </div>

        {/* Resumen Optimizado */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-8 shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            📊 RESUMEN OPTIMIZADO
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">69</div>
              <div className="text-sm text-blue-800 dark:text-blue-300">Total Actividades</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">53</div>
              <div className="text-sm text-green-800 dark:text-green-300">Esenciales (76.8%)</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">16</div>
              <div className="text-sm text-yellow-800 dark:text-yellow-300">A Saltar (23.2%)</div>
            </div>
          </div>

          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Exportar a CSV
          </button>
        </div>

        {/* Lista de Actividades por Día */}
        <div className="space-y-6">
          {Object.keys(activitiesData).map((day, dayIndex) => {
            const dayData = activitiesData[day];
            const dayProgress = calculateDayProgress(dayData.activities);
            const dayColors = [
              'border-red-500 bg-red-50 dark:bg-red-900',
              'border-orange-500 bg-orange-50 dark:bg-orange-900',
              'border-yellow-500 bg-yellow-50 dark:bg-yellow-900',
              'border-blue-500 bg-blue-50 dark:bg-blue-900',
              'border-green-500 bg-green-50 dark:bg-green-900'
            ];

            return (
              <div key={day} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
                <div className={`p-4 border-l-4 ${dayColors[dayIndex]} border-l-4`}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {day} - {dayData.esenciales} esenciales de {dayData.total}
                    </h3>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Progreso</div>
                      <div className="font-bold text-lg">{dayProgress}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${dayProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {dayData.activities.map((activity) => (
                      <div
                        key={activity.id}
                        className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${activity.essential
                          ? 'border-green-200 bg-green-50 dark:bg-green-900 dark:border-green-700'
                          : 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-700'
                          } ${checkedItems[activity.id] ? 'opacity-75' : ''}`}
                        onClick={() => handleCheckChange(activity.id)}
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-5 h-5 mt-0.5 ${checkedItems[activity.id]
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-gray-400'
                              }`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-1 mb-1">
                              <span>{getEssentialIcon(activity.essential)}</span>
                              <span>{getActivityIcon(activity.type)}</span>
                              <span className={`text-xs px-2 py-1 rounded ${activity.type === 'presencial' ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200' :
                                activity.type === 'casa' ? 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200' :
                                  'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-200'
                                }`}>
                                {activity.type}
                              </span>
                            </div>
                            <div className={`text-sm font-medium ${checkedItems[activity.id]
                              ? 'line-through text-gray-500 dark:text-gray-400'
                              : darkMode ? 'text-gray-200' : 'text-gray-800'
                              }`}>
                              {activity.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer con leyenda */}
        <div className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-md`}>
          <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Leyenda
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className={`font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Estado:</h5>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Actividad esencial (debe completarse)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>❌</span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Actividad no esencial (puede saltarse)</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className={`font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tipo:</h5>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span>🏫</span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Actividad presencial (en taller)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🏠</span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Trabajo en casa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📝</span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Examen o evaluación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoodleChecklist;