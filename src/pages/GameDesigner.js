import React, { useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';
import useDarkMode from '../hooks/useDarkMode';
import PlanClaseLayout from '../pages/PlanClaseLayout';

const GameDesigner = ({ numero }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Guardar información de navegación cuando la componente se monta
  useEffect(() => {
    // Guardar la ruta completa para poder recuperarla en caso de error 404
    sessionStorage.setItem('lastAsignaturaPath', location.pathname + location.search);
  }, [location]);

  const handleVolver = () => {
    // Navegar a la página principal
    navigate('/');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleVolver}
              className={`${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-800'
              } font-medium transition-colors duration-300`}
            >
              ← Volver
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Game Designer {numero}
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className={`rounded-lg shadow-md p-6 ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        } transition-colors duration-300`}>
          <h2 className="text-2xl font-bold mb-4">Contenido de Game Designer {numero}</h2>
          <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            <PlanClaseLayout
              asignatura="gamedesigner"
              tabs="3"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameDesigner;