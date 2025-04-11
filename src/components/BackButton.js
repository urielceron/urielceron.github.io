import React from 'react';
import useNavigationHelper from '../hooks/useNavigationHelper';
import useDarkMode from '../hooks/useDarkMode';

const BackButton = ({ text }) => {
  const { navigateBackToSubject, getBackButtonText } = useNavigationHelper();
  const { darkMode } = useDarkMode();

  // Usar el texto proporcionado o generar uno basado en la asignatura
  const buttonText = text || getBackButtonText();

  return (
    <button
      onClick={navigateBackToSubject}
      className={`${
        darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
      } font-medium transition-colors duration-300`}
    >
      {buttonText}
    </button>
  );
};

export default BackButton;