import React, { useState } from 'react';
import { ArrowLeft, Download, Shield, Clock, Users, CheckCircle2, AlertTriangle, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activity32 = ({ darkMode }) => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/moodle-course')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Curso
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>20 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mentor + Aprendiz</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Download className="w-6 h-6 text-blue-600" />
            <Shield className="w-6 h-6 text-red-600" />
          </div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Actividad 32: Descarga e instalación
          </h1>
        </div>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
          Safe Exam Browser - Guía colaborativa para instalación técnica
        </p>
      </div>

      {/* Objetivo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          🎯 Objetivo
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Realizar la descarga e instalación de Safe Exam Browser de manera colaborativa, donde el <strong>Mentor guía la instalación técnica</strong> mientras el <strong>Aprendiz documenta cada paso exacto</strong> para crear una guía de referencia replicable.
        </p>
      </div>

      {/* Instrucciones */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          📋 Instrucciones Paso a Paso
        </h2>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-blue-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                Preparación del equipo (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Mentor verifica requisitos técnicos:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Sistema operativo: Windows 7 o superior</li>
                  <li>• Espacio disponible: Mínimo 500 MB libres</li>
                  <li>• RAM: Al menos 2 GB disponibles</li>
                  <li>• Conexión a internet estable</li>
                </ul>
                <p><strong>Aprendiz documenta:</strong> Estado actual del equipo y posibles limitaciones</p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-green-500 bg-gray-700' : 'border-green-500 bg-green-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Descarga desde sitio oficial (5 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Mentor navega hacia:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Sitio oficial: <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>https://safeexambrowser.org/download_en.html</code></li>
                  <li>• Seleccionar: SEB for Windows (versión 3.7.0 o superior)</li>
                  <li>• Descargar a carpeta "Descargas"</li>
                </ul>
                <p><strong>Aprendiz anota:</strong> URL exacta, versión descargada y tamaño del archivo</p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div className={`flex-1 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-700' : 'border-orange-500 bg-orange-50'} rounded-r-lg p-4`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                Proceso de instalación guiado (10 min)
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p><strong>Mentor ejecuta instalación:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Doble clic en archivo descargado</li>
                  <li>• Seguir asistente: Aceptar licencia de uso</li>
                  <li>• Ubicación: Mantener predeterminada <code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>C:\Program Files\SafeExamBrowser</code></li>
                  <li>• Crear iconos en escritorio y menú inicio</li>
                  <li>• Completar instalación</li>
                </ul>
                <p><strong>Aprendiz documenta:</strong> Cada pantalla del instalador con capturas y decisiones tomadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roles y Responsabilidades */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          👥 División de Responsabilidades
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <Settings className="w-5 h-5" />
              Mentor (Guía Técnico)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• Verificar requisitos del sistema</li>
              <li>• Navegar al sitio oficial y descargar</li>
              <li>• Ejecutar instalación paso a paso</li>
              <li>• Explicar cada decisión técnica</li>
              <li>• Resolver problemas que surjan</li>
              <li>• Verificar instalación exitosa</li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
              <CheckCircle2 className="w-5 h-5" />
              Aprendiz (Documentador)
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-green-200' : 'text-green-700'}`}>
              <li>• Anotar cada paso en detalle</li>
              <li>• Tomar capturas de pantalla importantes</li>
              <li>• Documentar problemas encontrados</li>
              <li>• Registrar tiempos de cada fase</li>
              <li>• Crear guía replicable para otros</li>
              <li>• Verificar comprensión del proceso</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista de Cotejo */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          ✅ Lista de Cotejo
        </h2>

        <div className="space-y-3">
          {[
            { id: 'req', text: 'Requisitos técnicos verificados y documentados' },
            { id: 'download', text: 'Descarga exitosa desde sitio oficial con versión correcta' },
            { id: 'install', text: 'Instalación completada sin errores siguiendo pasos documentados' },
            { id: 'verify', text: 'Primera apertura de SEB realizada para verificar instalación' },
            { id: 'exit', text: 'Proceso de salida probado usando Ctrl + Q con contraseña "quit"' },
            { id: 'guide', text: 'Guía de instalación documentada completamente por el Aprendiz' },
            { id: 'screenshots', text: 'Capturas de pantalla clave tomadas para referencia futura' },
            { id: 'troubleshooting', text: 'Problemas encontrados y soluciones documentadas' }
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <button
                onClick={() => toggleCheck(item.id)}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  checkedItems[item.id]
                    ? 'bg-green-500 border-green-500 text-white'
                    : darkMode
                      ? 'border-gray-600 hover:border-gray-500'
                      : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {checkedItems[item.id] && <CheckCircle2 className="w-4 h-4" />}
              </button>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ${checkedItems[item.id] ? 'line-through opacity-75' : ''}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notas Importantes */}
      <div className={`${darkMode ? 'bg-amber-900 border border-amber-700' : 'bg-amber-50 border border-amber-200'} rounded-lg p-6`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
          <AlertTriangle className="w-6 h-6" />
          Notas Importantes
        </h2>

        <div className={`space-y-3 ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
          <div>
            <h3 className="font-semibold mb-1">🔧 Permisos de administrador:</h3>
            <p>Asegurar que se tienen permisos de administrador antes de iniciar la instalación para evitar errores.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🛡️ Antivirus temporal:</h3>
            <p>Algunos antivirus pueden bloquear la instalación. Preparar excepciones temporales si es necesario.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">📚 Documentación colaborativa:</h3>
            <p>La calidad de la documentación del Aprendiz determinará el éxito de futuras instalaciones por otros usuarios.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">🔍 Verificación crítica:</h3>
            <p>No considerar la instalación completa hasta verificar que SEB abre correctamente y se puede cerrar apropiadamente.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity32;
