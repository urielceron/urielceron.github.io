import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';
import useDarkMode from '../hooks/useDarkMode';
import { Star } from 'lucide-react';

const CV = () => {
  const navigate = useNavigate();  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const { darkMode, toggleDarkMode } = useDarkMode(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const menuItems = [
    { title: 'Inicio', id: 'home', action: 'scroll' },
    { title: 'Perfil', id: 'profile', action: 'scroll' },
    { title: 'Experiencia', id: 'experience', action: 'scroll' },
    { title: 'Educación', id: 'education', action: 'scroll' },
    {
      title: (
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-blue-500 font-semibold">Asignaturas 2025</span>
        </div>
      ),
      id: 'classroom',
      hasSubmenu: true,
      submenu: [        
        { title: 'Cultura Digital II', path: '/cultura-digital-2' },
        { title: 'Temas Selectos de Matemáticas I', path: '/matematicas' },                
      ]
    }
  ];

  // Función para manejar el clic en elementos del menú
  const handleMenuClick = (item) => {
    if (item.action === 'navigate') {
      navigate(item.path);
      setIsMenuOpen(false);
      setOpenSubmenu(null);
    } else if (item.hasSubmenu) {
      setOpenSubmenu(openSubmenu === item.id ? null : item.id);
    } else {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setOpenSubmenu(null);
    }
  };

  // Función para manejar el clic en elementos del submenú
  const handleSubmenuClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  // Componente para el menú desktop
  const renderDesktopMenu = () => (
    <div className="hidden md:flex items-center space-x-6">
      {menuItems.map((item) => (
        <div key={item.id} className="relative">
          <button
            onClick={() => handleMenuClick(item)}
            className={`${darkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
              } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
          >
            {item.title}
          </button>
          {item.hasSubmenu && openSubmenu === item.id && (
            <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 ${darkMode ? 'bg-gray-700' : 'bg-white'
              } ring-1 ring-black ring-opacity-5`}>
              {item.submenu.map((subItem) => (
                <button
                  key={subItem.path}
                  onClick={() => handleSubmenuClick(subItem.path)}
                  className={`block w-full text-left px-4 py-2 text-sm ${darkMode
                    ? 'text-gray-300 hover:bg-gray-600'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {subItem.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <a
        href="/cv-uriel-ceron.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          darkMode 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        } transition-colors duration-300`}
        >
          Descargar
      </a>
    </div>
  );

  // Componente para el menú móvil
  const renderMobileMenu = () => (
    <div className="md:hidden py-2">
      {menuItems.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => handleMenuClick(item)}
            className={`block w-full text-left px-4 py-2 text-base font-medium ${darkMode
              ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
          >
            {item.title}
          </button>
          {item.hasSubmenu && openSubmenu === item.id && (
            <div className={`pl-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              {item.submenu.map((subItem) => (
                <button
                  key={subItem.path}
                  onClick={() => handleSubmenuClick(subItem.path)}
                  className={`block w-full text-left px-4 py-2 text-sm ${darkMode
                    ? 'text-gray-300 hover:bg-gray-600'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {subItem.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      <a
        href="/cv-uriel-ceron.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center px-4 py-2 mt-2 text-sm font-medium ${
          darkMode 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        } rounded-md`}      
      >
        Descargar
      </a>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        } shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className={`text-xl font-bold bg-gradient-to-r ${darkMode ? 'from-blue-400 to-blue-200' : 'from-blue-600 to-blue-800'
                } bg-clip-text text-transparent`}>
                Curriculum Vitae
              </span>
            </div>

            {/* Desktop Menu */}
            {renderDesktopMenu()}

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && renderMobileMenu()}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {/* Sections */}
        {['home', 'profile', 'experience', 'teaching', 'education', 'academic'].map((sectionId) => (
          <section
            key={sectionId}
            id={sectionId}
            className={`mb-12 rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } transition-all duration-300 transform hover:scale-[1.01]`}
          >
            {sectionId === 'home' && (
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Foto */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mx-auto md:mx-0">
                    <img
                      src="/profile-photo.jpg"
                      alt="Uriel Antonio Cerón Interian"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Información */}
                <div className="flex-grow">
                  <h1 className={`text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode ? 'from-blue-400 to-blue-200' : 'from-blue-600 to-blue-800'
                    } bg-clip-text text-transparent text-center md:text-left`}>
                    URIEL ANTONIO CERÓN INTERIAN
                  </h1>
                  <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <p>Teléfono: +52 55 2674 8865</p>
                    <p>Correo: urielantonioceron@gmail.com</p>
                    <p>LinkedIn:
                      <a href="https://www.linkedin.com/in/urielceron/"
                        className={`ml-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                        linkedin.com/in/urielceron
                      </a>
                    </p>
                    <p>Website:
                      <a href="https://urielceron.github.io"
                        className={`ml-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                        urielceron.github.io
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {sectionId === 'profile' && (
              <>
                <h2 className="text-2xl font-bold mb-4">Perfil Profesional</h2>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Programador Full Stack, habilidades en el análisis, y desarrollo de sistemas de información,
                  mejoramiento del rendimiento del software y mantenimiento de sistemas Legacy.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Full Stack', 'React', 'Vue.js', 'Laravel', 'PostgreSQL'].map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode
                        ? 'bg-gray-700 text-blue-300 hover:bg-gray-600'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        } transition-colors duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            )}

            {sectionId === 'education' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Formación Académica</h2>
                <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className={`border-l-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} pl-4`}>
                    <h3 className="text-xl font-semibold">Maestría en Informática Administrativa</h3>
                    <p className="text-sm mb-2">UNAM (2015 - 2016)</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Promedio: 97.7 con Mención Honorífica</li>
                      <li>Cédula Profesional: 10660140</li>
                    </ul>
                    <br />
                    <h3 className="text-xl font-semibold">Licenciatura en Informática</h3>
                    <p className="text-sm mb-2">Instituto Tecnológico de Chetumal (TecNM) (Ago 2005 - Jun 2010)</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Sistemas empresariales</li>
                      <li>Promedio: 84</li>
                      <li>Cédula Profesional: 7857414</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {sectionId === 'experience' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Experiencia Profesional</h2>
                <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className={`border-l-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} pl-4`}>
                    <h3 className="text-xl font-semibold">Dirección General de Administración Escolar, UNAM</h3>
                    <p className="text-sm mb-2">Desarrollador Web (2017 - Presente)</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Migración y desarrollo de sistemas con Laravel, Vue.js, React</li>
                      <li>Diseño e implementación de APIs REST</li>
                      <li>Optimización y mantenimiento de sistemas legacy</li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold">Sistema Nacional DIF</h3>
                      <p className="text-sm mb-2">Jefe del Departamento de Epidemiología (2013 - 2015)</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Gestión de sistemas de información en 21 estados</li>
                        <li>Análisis y desarrollo del Sistema de Expediente Electrónico</li>
                        <li>Implementación de estándares de interoperabilidad</li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold">Centro de Rehabilitación Integral de Quintana Roo</h3>
                      <p className="text-sm mb-2">Jefe de Informática y Estadística (2004 - 2012)</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Desarrollo e implementación del Sistema SIRI (Presea I+T Gob)</li>
                        <li>Gestión de infraestructura tecnológica para 150+ dispositivos</li>
                        <li>Administración de seguridad informática y sistemas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}

            {sectionId === 'teaching' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Experiencia Docente</h2>
                <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className={`border-l-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} pl-4`}>
                    <h3 className="text-xl font-semibold">Universidad Internacional de la Rioja (UNIR)</h3>
                    <p className="text-sm mb-2">Profesor (2019 - 2023)</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Sistemas de Información para la Administración en Salud</li>
                      <li>Dirección de Trabajos Finales de Maestría</li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold">CBTis 253</h3>
                      <p className="text-sm mb-2">Profesor (2018 - Presente)</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Desarrollo Web y Aplicaciones Móviles</li>
                        <li>Bases de Datos y Programación</li>
                        <li>Tecnologías de la Información</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}

            {sectionId === 'academic' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Producción Académica</h2>
                <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Prototipo didáctico para cálculos estequiométricos "DICALMET"</h3>
                      <p className="text-sm">Marzo 2021 | <a href="https://bit.ly/3dEKCX7" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Ver documento</a></p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">Cuadro de Mando y Balanced Scorecard: Caso práctico</h3>
                      <p className="text-sm">Enero 2020 | <a href="https://bit.ly/3EddpPJ" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Ver documento</a></p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">Tesis: Estándares para la interoperabilidad</h3>
                      <p className="text-sm">Marzo 2017 | <a href="http://132.248.9.195/ptd2017/enero/0755099/Index.html" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Ver documento</a></p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Uriel Antonio Cerón Interian</p>
          <p className="text-sm mt-2">Todos los derechos reservados</p>
        </div>
      </footer>
    </div >
  );
};

export default CV;