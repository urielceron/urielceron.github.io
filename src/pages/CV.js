import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
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
          <span className="text-blue-500 font-semibold">Asignaturas</span>
        </div>
      ),
      id: 'classroom',
      hasSubmenu: true,
      submenu: [
        { title: 'Cultura Digital I', path: '/cultura-digital-1' },
        { title: 'Cultura Digital II', path: '/cultura-digital-2' },
        { title: 'Temas Selectos de Matemáticas I', path: '/matematicas' },
        { title: 'Pensamiento Matemático III', path: '/pensamiento-matematico-iii' },
      ]
    },
    {
      title: (
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-green-500" />
          <span className="text-green-600 font-semibold">Cursos</span>
        </div>
      ),
      id: 'courses',
      hasSubmenu: true,
      submenu: [
        { title: 'Ciberseguridad', path: '/ciberseguridad' },
        { title: 'Moodle + Safe Exam Browser + IA', path: '/moodle-course' },
        { title: 'Métodos y Técnicas de Investigación + CANVAS', path: '/research-course' },
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
    // Determinamos qué asignatura es basado en la ruta
    let asignatura = '';
    if (path.includes('cultura-digital-2')) {
      asignatura = 'culturadigital2';
    } else if (path.includes('matematicas')) {
      asignatura = 'matematicas';
    } else if (path.includes('gamedesigner')) {
      asignatura = 'gamedesigner';
    } else if (path.includes('pensamiento-matematico-iii')) {
      asignatura = 'pensamiento-matematico-iii';
    } else if (path.includes('ciberseguridad') || path.includes('moodle-course') || path.includes('research-course')) {
      navigate(path);
      setIsMenuOpen(false);
      setOpenSubmenu(null);
      return;
    }

    // Para asegurarnos de que la navegación funcione correctamente,
    // añadimos los parámetros iniciales específicos para cada asignatura
    const initialParams = new URLSearchParams();
    initialParams.set('asignatura', asignatura);
    initialParams.set('tab', '1');
    initialParams.set('page', '0');
    initialParams.set('fase', '0');

    // Navegamos a la ruta con los parámetros iniciales
    navigate(`${path}?${initialParams.toString()}`);
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
                  <div className="w-32 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mx-auto md:mx-0">
                    <img
                      src="/profile-photo.png"
                      alt="Uriel Antonio Cerón Interian"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                 {/* Información */}
                 <div className="flex-grow">
                   <h1 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${darkMode ? 'from-blue-400 to-blue-200' : 'from-blue-600 to-blue-800'
                     } bg-clip-text text-transparent text-center md:text-left`}>
                     URIEL ANTONIO CERÓN INTERIAN
                   </h1>
                   <p className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-center md:text-left`}>
                     Senior Full Stack Developer | Analista de Sistemas | PHP & React
                   </p>
                   <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                     <p>Teléfono: +52 55 2674 8865</p>
                     <p>Correo:
                       <a href="mailto:urielantonioceron@gmail.com"
                         className={`ml-1 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                         urielantonioceron@gmail.com
                       </a>
                     </p>
                     <p>LinkedIn:
                       <a href="https://www.linkedin.com/in/urielceron/"
                         className={`ml-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                         linkedin.com/in/urielceron
                       </a>
                     </p>
                     <p>Portfolio:
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
                  Programador Full Stack con más de 15 años en el sector público. Especialista en <strong>modernización de sistemas legacy</strong>, optimización de bases de datos y desarrollo web. Profesional proactivo con sólida capacidad de autoaprendizaje, actualizado en arquitecturas en la nube (<strong>AWS</strong>) y frameworks modernos (<strong>React, Vue.js</strong>).
                </p>
                <h3 className="text-xl font-semibold mb-3">Habilidades Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <strong className="text-blue-600">Backend & Legacy:</strong>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>PHP (Laravel, Slim), VB6 (Migración), SQL (PostgreSQL, MySQL)</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <strong className="text-blue-600">Frontend Moderno:</strong>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>JavaScript (Vue.js, React), HTML5, CSS3, Bootstrap</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <strong className="text-blue-600">Nube & Herramientas:</strong>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>AWS (Amplify, DynamoDB, Lambda), Git, APIs REST, Stripe</p>
                  </div>
                </div>
              </>
            )}

            {sectionId === 'education' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Formación Académica</h2>
                <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className={`border-l-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} pl-4`}>
                    <h3 className="text-xl font-semibold">Maestría en Informática Administrativa (Mención Honorífica)</h3>
                    <p className="text-sm mb-2">UNAM | 2016</p>
                    <h3 className="text-xl font-semibold mt-4">Licenciatura en Informática</h3>
                    <p className="text-sm mb-2">Instituto Tecnológico de Chetumal | 2010</p>
                  </div>
                </div>
              </>
            )}

            {sectionId === 'experience' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Experiencia Profesional</h2>
                <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className={`border-l-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} pl-4`}>
                    <h3 className="text-xl font-semibold">DGAE - UNAM</h3>
                    <p className="text-sm mb-2">Desarrollador Web | Ene 2017 – Presente</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Migré sistemas legacy (VB6) a tecnologías web modernas</li>
                      <li>Desarrollé 3 sistemas de gestión escolar (Laravel, Vue.js, PostgreSQL)</li>
                      <li>Gestioné mantenimiento de sistemas internos heredados</li>
                      <li>Diseñé APIs REST (PHP/Slim) para oficios electrónicos</li>
                      <li>Implementé reportes PDF y optimicé consultas SQL</li>
                      <li>Proporcioné soporte técnico y capacitación a usuarios</li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold">Sistema Nacional DIF</h3>
                      <p className="text-sm mb-2">Jefe Dpto. Epidemiología | Ene 2013 – Ene 2015</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Gestioné operación de 3 Sistemas de Salud en 21 estados</li>
                        <li>Realicé análisis de requisitos para Expediente Electrónico</li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold">CRIQ Quintana Roo</h3>
                      <p className="text-sm mb-2">Jefe de Informática | Jun 2004 – Oct 2012</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Desarrollé Sistema de Expediente Clínico Electrónico (PHP, MySQL)</li>
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
                    <h3 className="text-xl font-semibold">CBTis No. 253</h3>
                    <p className="text-sm mb-2">Profesor | Feb 2018 – Presente</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Programación Web, Bases de Datos, Frameworks (Vue.js, React, C++)</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {sectionId === 'academic' && (
              <>
                <h2 className="text-2xl font-bold mb-6">Proyectos de Actualización</h2>
                <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <a href="https://kc-rissima.chetumalmx.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:underline">
                      KC-Rissima (SaaS Serverless)
                    </a>
                    <p className="text-sm mt-2">Proyecto de Autoformación & Emprendimiento</p>
                    <p className="text-sm mt-2">
                      Plataforma de gestión en <strong>AWS Amplify Gen 2</strong>, <strong>React, TypeScript, DynamoDB</strong>.
                      Integración de autenticación (Cognito) y pagos (Stripe).
                    </p>
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