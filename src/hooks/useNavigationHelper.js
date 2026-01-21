import { useNavigate } from 'react-router-dom';

const useNavigationHelper = () => {
  const navigate = useNavigate();

  // Función para volver a la última página de asignatura
  const navigateBackToSubject = () => {
    // Intentar recuperar la última ruta de asignatura guardada
    const savedState = sessionStorage.getItem('lastAsignaturaPath');

    if (savedState) {
      // Usar la ruta completa guardada con hash para React Router
      window.location.href = '/#' + savedState;
      return;
    }

    // Si no tenemos una ruta guardada, intentar determinar la asignatura
    const lastActivityState = sessionStorage.getItem('lastActivityState');

    if (lastActivityState) {
      try {
        const state = JSON.parse(lastActivityState);
        const asignatura = state.asignatura;

        // Construir la URL según la asignatura
        if (asignatura) {
          let baseUrl = '';
          let asignaturaParam = '';

          switch (asignatura) {
            case 'culturadigital2':
              baseUrl = '/cultura-digital-2';
              asignaturaParam = 'culturadigital2';
              break;
            case 'matematicas':
              baseUrl = '/matematicas';
              asignaturaParam = 'matematicas';
              break;
            case 'desarrolloweb':
              baseUrl = '/desarrolloweb';
              asignaturaParam = 'desarrolloweb';
              break;
            case 'gamedesigner':
              baseUrl = '/gamedesigner';
              asignaturaParam = 'gamedesigner';
              break;
            default:
              baseUrl = '/matematicas';
              asignaturaParam = 'matematicas';
          }

          // Ruta con parámetros completos
          const fullPath = `${baseUrl}?asignatura=${asignaturaParam}&tab=${state.tab || '1'}&page=${state.page || '0'}&fase=${state.fase || '0'}&section=${state.section || 'progresion'}`;

          window.location.href = '/#' + fullPath;
          return;
        }
      } catch (e) {
        console.error('Error parsing saved activity state:', e);
      }
    }

    // Si todo lo anterior falla, intentar determinar la asignatura de la URL actual
    const currentUrl = window.location.href;

    if (currentUrl.includes('cultura-digital') || currentUrl.includes('culturadigital2')) {
      window.location.href = '/#/cultura-digital-2?asignatura=culturadigital2&tab=1&page=0&fase=0&section=progresion';
    } else if (currentUrl.includes('matematicas')) {
      window.location.href = '/#/matematicas?asignatura=matematicas&tab=1&page=0&fase=0&section=progresion';
    } else if (currentUrl.includes('desarrolloweb')) {
      window.location.href = '/#/desarrolloweb?asignatura=desarrolloweb&tab=1&page=0&fase=0&section=progresion';
    } else if (currentUrl.includes('gamedesigner')) {
      window.location.href = '/#/gamedesigner?asignatura=gamedesigner&tab=1&page=0&fase=0&section=progresion';
    } else {
      // Ruta de respaldo por defecto
      window.location.href = '/#/matematicas?asignatura=matematicas&tab=1&page=0&fase=0&section=progresion';
    }
  };

  // Función para determinar el texto del botón según la asignatura
  const getBackButtonText = () => {
    const savedState = sessionStorage.getItem('lastAsignaturaPath') || '';
    const lastActivityState = sessionStorage.getItem('lastActivityState');
    let asignatura = '';

    if (lastActivityState) {
      try {
        const state = JSON.parse(lastActivityState);
        asignatura = state.asignatura;
      } catch (e) {
        console.error('Error parsing activity state for button text:', e);
      }
    }

    if (!asignatura) {
      // Intentar determinar la asignatura de la ruta guardada
      if (savedState.includes('cultura-digital') || savedState.includes('culturadigital2')) {
        asignatura = 'culturadigital2';
      } else if (savedState.includes('matematicas')) {
        asignatura = 'matematicas';
      } else if (savedState.includes('desarrolloweb')) {
        asignatura = 'desarrolloweb';
      } else if (savedState.includes('gamedesigner')) {
        asignatura = 'gamedesigner';
      }
    }

    // Devolver el texto apropiado según la asignatura
    switch (asignatura) {
      case 'culturadigital2':
        return "← Regresar a Cultura Digital II";
      case 'matematicas':
        return "← Regresar a Temas Selectos de Matemáticas";
      case 'desarrolloweb':
        return "← Regresar a Web Development";
      case 'gamedesigner':
        return "← Regresar a Game Designer";
      default:
        return "← Regresar";
    }
  };

  return {
    navigateBackToSubject,
    getBackButtonText
  };
};

export default useNavigationHelper;