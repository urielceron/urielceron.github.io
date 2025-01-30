import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import useDarkMode from '../../../../hooks/useDarkMode';
import DarkModeToggle from '../../../../components/DarkModeToggle';

const MedicionPulso = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const recursos = [
    {
      tipo: 'imagen',
      url: 'https://www.nlm.nih.gov/medlineplus/spanish/ency/images/ency/fullsize/9799.jpg',
      titulo: 'Medición del pulso en la muñeca',
      descripcion: 'Ubicación correcta de los dedos en la arteria radial'
    },
    {
      tipo: 'imagen',
      url: 'https://concepto.de/wp-content/uploads/2015/04/pulso-2-e1548895122356.jpg',
      titulo: 'Medición del pulso en el cuello',
      descripcion: 'Técnica de medición en la arteria carótida'
    },    
    {
      tipo: 'imagen',
      url: 'https://as1.ftcdn.net/v2/jpg/05/59/06/16/1000_F_559061642_EI2mq5GUGIle2SrV9uDyEcYNtQTz0X8H.jpg',
      titulo: 'Variación del pulso con ejercicio',
      descripcion: 'Gráfica comparativa pulso en reposo vs actividad'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => navigate('/matematicas')}
              className={`${
                darkMode 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-800'
              } font-medium transition-colors duration-300`}
            >
              ← Regresar a Temas Selectos
            </button>
            <div className="flex items-center space-x-4">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Medición del Pulso Manual
              </h1>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      {/* Resto del contenido existente con las clases dark actualizadas */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              <mark>Medición del Pulso Manual</mark>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Saber Qué (Marco Conceptual)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>El pulso es la onda de presión generada por la contracción del corazón</li>
                <li>Los puntos principales de medición son la arteria radial (muñeca) y carótida (cuello)</li>
                <li>La frecuencia cardíaca normal en reposo es de 60-100 latidos por minuto</li>
                <li>El ejercicio aumenta temporalmente la frecuencia cardíaca</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Saber Cómo (Procedimiento)</h3>
              <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                <li>Ubicar el punto de pulso:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Muñeca: Dos dedos bajo el pliegue de la muñeca del lado del pulgar</li>
                    <li>Cuello: Lateral a la tráquea, bajo la mandíbula</li>
                  </ul>
                </li>
                <li>Usar los dedos índice y medio, nunca el pulgar</li>
                <li>Presionar suavemente sobre la arteria</li>
                <li>Contar los latidos durante 30 segundos y multiplicar por 2</li>
                <li>Registrar la medición y hora</li>
              </ol>

              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos Digitales</h3>
              <div className="grid grid-cols-1 gap-6">
                {recursos.map((recurso, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={recurso.url} 
                      alt={recurso.titulo}
                      className="w-full h-50 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{recurso.titulo}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{recurso.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Medición del pulso en la muñeca</h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8LfoD0DoZRI?si=oLSejIpW90nYpoAz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Medición del pulso en el cuello</h4>
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BNgGSXWTb60?si=Mt--WK9N_6rrPgXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>    
  );
};

export default MedicionPulso;