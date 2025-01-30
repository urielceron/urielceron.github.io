import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // Intentar obtener el valor de localStorage, si no existe, usar true (modo oscuro por defecto)
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    // Guardar la preferencia en localStorage cada vez que cambie
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;