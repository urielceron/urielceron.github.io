import React, { useState } from 'react';
import { ArrowLeft, Monitor, CheckCircle2, Users, Clock, Download, Settings, Shield, FileDownload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homework1Day4 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const handleBack = () => {
    navigate('/moodle-course');
  };

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistItems = [
    "Verificar requisitos técnicos del equipo personal completado",
    "Permisos de administrador preparados para instalación",
    "Configuración de antivirus ajustada para Safe Exam Browser",
    "Safe Exam Browser descargado desde sitio oficial",
    "Instalación completada exitosamente en equipo personal",
    "Primera verificación de SEB ejecutada correctamente",
    "Configuraciones transferidas desde taller usando USB/email",
    "Carpeta Documents\\SEB_Configs\\ creada y organizada",
    "Configuración personalizada para mi materia creada",
    "Contraseña personalizada establecida para mi configuración",
    "URLs permitidas configuradas solo para Moodle CBTIS253",
    "URLs bloqueadas configuradas para redes sociales y distractores",
    "Restricciones de aplicaciones ajustadas según necesidades de materia",
    "Archivo .seb personal guardado con nombre descriptivo"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al Curso
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Clock className="h-5 w-5" />
              <span className="font-medium">60 min</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Monitor className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ACTIVIDAD 1: CONFIGURACIÓN EN EQUIPO PERSONAL
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Trabajo en Casa - Día 4 • Actividad 1 de 4
            </p>
          </div>
        </div>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200'} border rounded-lg p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
            Objetivo
          </h2>
        </div>
        <p className={`${darkMode ? 'text-purple-200' : 'text-purple-700'} leading-relaxed`}>
          Instalar y configurar Safe Exam Browser en tu computadora personal (laptop o PC de casa),
          creando configuraciones personalizadas para todos los exámenes de tu materia.
        </p>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-red-500 bg-gray-700' : 'border-red-500 bg-red-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                Paso 1: Preparar equipo personal para instalación (10 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Verificar requisitos técnicos:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Sistema operativo:</strong> Windows 7 o superior</li>
                    <li>• <strong>Espacio disponible:</strong> Mínimo 500 MB libres</li>
                    <li>• <strong>RAM:</strong> Al menos 2 GB disponibles</li>
                    <li>• <strong>Conexión a internet</strong> estable</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Preparar permisos de administrador:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Si es tu computadora: Usar cuenta de administrador</li>
                    <li>• Si es computadora familiar: Solicitar ayuda de adulto responsable</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Configurar antivirus: Preparar para agregar excepción temporal si es necesario</p>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Paso 2: Descargar Safe Exam Browser en equipo personal (10 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <ul className="space-y-2">
                  <li>• Ve a <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>http://moodle.cbtis253.edu.mx/</code> desde tu computadora personal</li>
                  <li>• Inicia sesión con tu cuenta docente</li>
                  <li>• Navega a la sección de administración → Safe Exam Browser</li>
                  <li>• <strong>Descargar desde sitio oficial:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>https://safeexambrowser.org/download_en.html</code></li>
                  <li>• <strong>Seleccionar versión:</strong> SEB for Windows (versión 3.7.0 o superior)</li>
                  <li>• <strong>Guardar en:</strong> Carpeta "Descargas" de tu computadora personal</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-yellow-500 bg-gray-700' : 'border-yellow-500 bg-yellow-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                Paso 3: Instalar SEB siguiendo proceso aprendido (15 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Ejecutar instalador:</p>
                  <p>• Doble clic en archivo descargado</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Seguir asistente de instalación:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Aceptar licencia de uso</li>
                    <li>• Mantener ubicación predeterminada: <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>C:\Program Files\SafeExamBrowser</code></li>
                    <li>• Crear iconos en escritorio y menú inicio</li>
                    <li>• Completar instalación</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Primera verificación:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Abrir SEB para confirmar instalación exitosa</li>
                    <li>• <strong>Salir usando:</strong> Ctrl + Q con contraseña "quit"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Paso 4: Transferir configuraciones del taller (10 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <p className="font-medium mb-2">Copiar archivos .seb desde taller:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>CBTIS253_Moodle45_Examenes.seb</code> (configuración básica)</li>
                    <li>• <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>CBTIS253_Avanzado_Matematicas.seb</code> (configuración avanzada)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Métodos de transferencia:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• USB/memoria desde computadora del taller</li>
                    <li>• Email personal enviado desde el taller</li>
                    <li>• Descarga desde Moodle si se subieron ahí</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Ubicación en equipo personal: Crear carpeta <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>Documents\SEB_Configs\</code></p>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              5
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Paso 5: Crear configuración personalizada para tu materia (15 min)
              </h3>
              <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>• <strong>Abrir SEB Administrator</strong> en tu computadora personal</p>
                <div>
                  <p className="font-medium mb-2">Crear nueva configuración basada en tus necesidades:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Nombre:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>CBTIS253_[TU_MATERIA]_Personal.seb</code></li>
                    <li>• <strong>Contraseña de salida:</strong> <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>[tu_materia]2024</code> (personalizada)</li>
                    <li>• <strong>URLs permitidas:</strong> Solo <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>http://moodle.cbtis253.edu.mx</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Lista de Cotejo
        </h2>
        <div className="space-y-3">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <button
                onClick={() => toggleCheck(`checklist-${index}`)}
                className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  checkedItems[`checklist-${index}`]
                    ? 'bg-green-500 border-green-500 text-white'
                    : `border-gray-300 ${darkMode
                        ? 'hover:border-green-400' : 'hover:border-green-500'}`
                }`}
              >
                {checkedItems[`checklist-${index}`] && <CheckCircle2 className="h-4 w-4" />}
              </button>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          📝 Notas Importantes
        </h2>
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'}`}>
            <p><strong>Instalación responsable:</strong> Solo instala en tu equipo personal o con permiso explícito del propietario.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-yellow-500 bg-yellow-900/20' : 'border-yellow-500 bg-yellow-50'}`}>
            <p><strong>Backup de configuraciones:</strong> Guarda los archivos .seb en múltiples ubicaciones (USB, email, nube).</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-green-500 bg-green-900/20' : 'border-green-500 bg-green-50'}`}>
            <p><strong>Personalización por materia:</strong> Crea configuraciones específicas según las necesidades de evaluación de tu asignatura.</p>
          </div>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'border-purple-500 bg-purple-900/20' : 'border-purple-500 bg-purple-50'}`}>
            <p><strong>Pruebas en casa:</strong> Una vez instalado, podrás probar todas las configuraciones en un ambiente controlado.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework1Day4;
