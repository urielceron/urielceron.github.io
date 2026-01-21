import React from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className={`p-2 rounded-lg ${
      darkMode
        ? 'bg-gray-700 text-yellow-300'
        : 'bg-gray-100 text-gray-600'
    } hover:bg-opacity-80 transition-all duration-300`}
    aria-label="Toggle dark mode"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

export default DarkModeToggle;