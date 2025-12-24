import React from 'react';
import {
  Zap, Users, FileText, Layers, CheckSquare, Target,
  Clock, Package, Terminal, Eye, Wrench, BookOpen
} from 'lucide-react';

// Componente para renderizar contenido con formato mejorado
export const ContentRenderer = ({ content, darkMode, styles }) => {
  if (!content) return null;

  // Clases CSS para highlighting
  const keywordClass = darkMode ? 'text-cyan-400 font-semibold' : 'text-blue-600 font-semibold';
  const quoteClass = darkMode ? 'text-yellow-400 italic' : 'text-amber-600 italic';

  // Detectar y parsear tablas markdown
  const parseTable = (text) => {
    const lines = text.split('\n');
    const tableLines = [];
    let inTable = false;
    let tableStart = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          tableStart = i;
          inTable = true;
        }
        tableLines.push(line);
      } else if (inTable) {
        break;
      }
    }

    if (tableLines.length >= 2) {
      const headerLine = tableLines[0];
      const headers = headerLine.split('|').filter(h => h.trim()).map(h => h.trim());
      const dataRows = tableLines.slice(2).map(row =>
        row.split('|').filter(c => c.trim()).map(c => c.trim())
      );
      return { headers, rows: dataRows, startLine: tableStart, endLine: tableStart + tableLines.length };
    }
    return null;
  };

  // Renderizar tabla estilizada
  const renderTable = (tableData) => (
    <div className="my-4 overflow-x-auto rounded-xl shadow-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className={darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}>
            {tableData.headers.map((header, idx) => (
              <th key={idx} className="px-4 py-3 text-left text-white font-semibold text-sm border-b-2 border-white/20">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={`
              ${rowIdx % 2 === 0 ? (darkMode ? 'bg-gray-800/50' : 'bg-gray-50') : (darkMode ? 'bg-gray-700/30' : 'bg-white')}
              ${darkMode ? 'hover:bg-cyan-900/30' : 'hover:bg-blue-50'} transition-colors duration-200
            `}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className={`px-4 py-3 text-sm ${styles.text} border-b ${styles.border}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Aplicar formato al texto de forma segura
  const formatText = (text) => {
    const keywords = [
      'Confidencialidad', 'Integridad', 'Disponibilidad', 'CIA', 'NIST',
      'amenaza', 'vulnerabilidad', 'riesgo', 'control', 'algoritmo',
      'hash', 'cifrado', 'SHA-256', 'AES', 'RSA', 'preventivo', 'detectivo', 'correctivo',
      'ISO 27001', 'activo', 'seguridad', 'ciberseguridad', 'Ciberseguridad',
      'Triángulo', 'Tríada', 'autenticación', 'MFA', 'contraseña', 'malware',
      'phishing', 'firewall', 'antivirus', 'backup', 'respaldo', 'Python',
      'script', 'scripts', 'código', 'GitHub', 'repositorio', 'API',
      'encriptar', 'desencriptar', 'token', 'OWASP', 'pentest', 'pentester'
    ];

    const keywordPattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    const segments = text.split(keywordPattern);

    return segments.map((segment, idx) => {
      if (idx % 2 === 1) {
        return <span key={idx} className={keywordClass}>{segment}</span>;
      }
      if (segment.includes('"')) {
        const quoteParts = segment.split(/(".*?")/g);
        return quoteParts.map((part, pIdx) => {
          if (part.startsWith('"') && part.endsWith('"')) {
            return <span key={`${idx}-${pIdx}`} className={quoteClass}>{part}</span>;
          }
          return part;
        });
      }
      return segment;
    });
  };

  // Renderizar una línea de texto
  const renderLine = (line, lIdx) => {
    const trimmedLine = line.trim();
    if (!trimmedLine) return null;

    // Detectar títulos/headers en mayúsculas
    if (/^[A-ZÁÉÍÓÚÑ\s]+:$/.test(trimmedLine) || /^(PASO|SECCIÓN|PARTE|ESTACIÓN)\s+\d+/i.test(trimmedLine)) {
      return (
        <h5 key={lIdx} className={`font-bold ${styles.accent} mt-4 mb-2 flex items-center gap-2`}>
          <Zap className="w-4 h-4" />
          {trimmedLine}
        </h5>
      );
    }

    // Detectar bullets
    const bulletMatch = trimmedLine.match(/^[•\-\*]\s*(.+)/);
    if (bulletMatch) {
      return (
        <div key={lIdx} className={`flex items-start gap-2 pl-2 ${styles.textSecondary}`}>
          <span className={`${styles.accent} mt-0.5`}>›</span>
          <span>{formatText(bulletMatch[1])}</span>
        </div>
      );
    }

    // Detectar items numerados
    const numberMatch = trimmedLine.match(/^(\d+)\.\s*(.+)/);
    if (numberMatch) {
      return (
        <div key={lIdx} className={`flex items-start gap-3 pl-2 py-1 ${styles.textSecondary}`}>
          <span className={`
            flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold
            ${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-100 text-blue-600'}
          `}>
            {numberMatch[1]}
          </span>
          <span className="flex-1">{formatText(numberMatch[2])}</span>
        </div>
      );
    }

    // Texto normal
    return (
      <p key={lIdx} className={styles.textSecondary}>
        {formatText(trimmedLine)}
      </p>
    );
  };

  // Renderizar contenido formateado
  const renderFormattedContent = (text) => {
    const tableData = parseTable(text);
    const parts = [];

    if (tableData) {
      const lines = text.split('\n');
      const beforeTable = lines.slice(0, tableData.startLine).join('\n');
      const afterTable = lines.slice(tableData.endLine).join('\n');

      if (beforeTable.trim()) parts.push({ type: 'text', content: beforeTable });
      parts.push({ type: 'table', content: tableData });
      if (afterTable.trim()) parts.push({ type: 'text', content: afterTable });
    } else {
      parts.push({ type: 'text', content: text });
    }

    return parts.map((part, idx) => {
      if (part.type === 'table') {
        return <div key={idx}>{renderTable(part.content)}</div>;
      }

      const paragraphs = part.content.split('\n\n');
      return (
        <div key={idx} className="space-y-3">
          {paragraphs.map((para, pIdx) => {
            const lines = para.split('\n');
            return (
              <div key={pIdx} className="space-y-1.5">
                {lines.map((line, lIdx) => renderLine(line, `${pIdx}-${lIdx}`))}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return <div className="content-renderer">{renderFormattedContent(content)}</div>;
};

// Componente para renderizar actividades con mejor formato
export const ActivityRenderer = ({ actividad, darkMode, styles }) => {
  const parseActivityInstructions = (text) => {
    const sections = [];
    const lines = text.split('\n');
    let currentSection = null;
    let sectionContent = [];

    lines.forEach(line => {
      const trimmedLine = line.trim();
      const sectionMatch = trimmedLine.match(/^(\d+)\.\s*([A-ZÁÉÍÓÚÑ\s]+)\s*\((\d+)\s*min\):?$/i);

      if (sectionMatch) {
        if (currentSection) {
          sections.push({ ...currentSection, items: [...sectionContent] });
          sectionContent = [];
        }
        currentSection = {
          number: sectionMatch[1],
          title: sectionMatch[2].trim(),
          duration: sectionMatch[3]
        };
      } else if (trimmedLine && currentSection) {
        const bulletMatch = trimmedLine.match(/^[•\-\*]\s*(.+)/);
        if (bulletMatch) {
          sectionContent.push(bulletMatch[1]);
        } else if (!trimmedLine.startsWith('ENTREGABLE')) {
          sectionContent.push(trimmedLine);
        }
      }
    });

    if (currentSection) {
      sections.push({ ...currentSection, items: sectionContent });
    }

    const entregableMatch = text.match(/ENTREGABLE:\s*(.+)/i);
    const entregable = entregableMatch ? entregableMatch[1].trim() : null;

    return { sections, entregable };
  };

  const { sections, entregable } = parseActivityInstructions(actividad.instrucciones);
  const stepIcons = [Users, FileText, Layers, CheckSquare, Target, Zap];

  return (
    <div className="space-y-4">
      {/* Header de actividad */}
      <div className={`
        p-4 rounded-xl border-l-4
        ${darkMode ? 'bg-gradient-to-r from-cyan-900/30 to-transparent border-cyan-500' : 'bg-gradient-to-r from-blue-50 to-transparent border-blue-500'}
      `}>
        <div className="flex items-center gap-2 mb-1">
          <Zap className={`w-5 h-5 ${styles.accent}`} />
          <span className={`font-bold ${styles.accent}`}>{actividad.descripcion}</span>
        </div>
        <div className={`flex items-center gap-4 text-sm ${styles.textMuted}`}>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {actividad.duracion}
          </span>
        </div>
      </div>

      {/* Instrucciones por secciones */}
      {sections.length > 0 ? (
        <div className="space-y-3">
          <h6 className={`font-semibold ${styles.text} flex items-center gap-2`}>
            <Terminal className="w-4 h-4" /> INSTRUCCIONES:
          </h6>
          <div className="grid gap-3">
            {sections.map((section, idx) => {
              const StepIcon = stepIcons[idx % stepIcons.length];
              return (
                <div
                  key={idx}
                  className={`
                    p-4 rounded-xl border transition-all duration-300
                    ${darkMode
                      ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800'
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'}
                  `}
                >
                  <div className="flex items-start gap-3">
                    <div className={`
                      flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                      ${darkMode ? 'bg-cyan-500/20' : 'bg-blue-100'}
                    `}>
                      <span className={`text-lg font-bold ${styles.accent}`}>{section.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h6 className={`font-semibold ${styles.text} flex items-center gap-2`}>
                          <StepIcon className={`w-4 h-4 ${styles.accent}`} />
                          {section.title}
                        </h6>
                        <span className={`
                          px-2 py-1 rounded-full text-xs font-medium
                          ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}
                        `}>
                          {section.duration} min
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className={`flex items-start gap-2 text-sm ${styles.textSecondary}`}>
                            <span className={styles.accent}>›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <ContentRenderer content={actividad.instrucciones} darkMode={darkMode} styles={styles} />
      )}

      {/* Entregable */}
      {entregable && (
        <div className={`
          p-4 rounded-xl border-2 border-dashed
          ${darkMode ? 'border-green-500/50 bg-green-900/20' : 'border-green-400 bg-green-50'}
        `}>
          <div className="flex items-center gap-2">
            <CheckSquare className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
              ENTREGABLE:
            </span>
            <span className={styles.textSecondary}>{entregable}</span>
          </div>
        </div>
      )}

      {/* Materiales */}
      {actividad.materiales && actividad.materiales.length > 0 && (
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
          <h6 className={`font-semibold ${styles.text} flex items-center gap-2 mb-3`}>
            <Package className="w-4 h-4" /> Materiales necesarios:
          </h6>
          <div className="flex flex-wrap gap-2">
            {actividad.materiales.map((mat, idx) => (
              <span
                key={idx}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium
                  ${darkMode
                    ? 'bg-gray-700 text-gray-300 border border-gray-600'
                    : 'bg-white text-gray-700 border border-gray-200 shadow-sm'}
                `}
              >
                {mat}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para VARK cards mejoradas
export const VarkCards = ({ vark, darkMode, styles }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div className={`
      p-3 rounded-xl text-xs border-2 transition-all duration-300 hover:scale-105
      ${styles.varkV}
    `}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-purple-500/30' : 'bg-purple-200'}`}>
          <Eye className="w-3 h-3" />
        </div>
        <span className="font-bold">Visual</span>
      </div>
      <p className="opacity-80">{vark.visual}</p>
    </div>
    <div className={`
      p-3 rounded-xl text-xs border-2 transition-all duration-300 hover:scale-105
      ${styles.varkA}
    `}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-500/30' : 'bg-blue-200'}`}>
          <Users className="w-3 h-3" />
        </div>
        <span className="font-bold">Auditivo</span>
      </div>
      <p className="opacity-80">{vark.auditivo}</p>
    </div>
    <div className={`
      p-3 rounded-xl text-xs border-2 transition-all duration-300 hover:scale-105
      ${styles.varkR}
    `}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-green-500/30' : 'bg-green-200'}`}>
          <FileText className="w-3 h-3" />
        </div>
        <span className="font-bold">Lectura</span>
      </div>
      <p className="opacity-80">{vark.lectura}</p>
    </div>
    <div className={`
      p-3 rounded-xl text-xs border-2 transition-all duration-300 hover:scale-105
      ${styles.varkK}
    `}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-orange-500/30' : 'bg-orange-200'}`}>
          <Wrench className="w-3 h-3" />
        </div>
        <span className="font-bold">Kinestésico</span>
      </div>
      <p className="opacity-80">{vark.kinestesico}</p>
    </div>
  </div>
);

// Componente ExpandableContent mejorado
export const ExpandableContent = ({ id, title, children, icon: Icon, darkMode, styles, expandedContent, toggleContent, useRenderer = true }) => {
  const isExpanded = expandedContent[id];
  return (
    <div className={`border ${styles.border} rounded-xl overflow-hidden mb-3 transition-all duration-300 ${isExpanded ? 'shadow-lg' : ''}`}>
      <button
        onClick={() => toggleContent(id)}
        className={`
          w-full p-4 flex items-center justify-between transition-all duration-300
          ${styles.bgCard} ${styles.bgCardHover}
          ${isExpanded ? (darkMode ? 'bg-gray-750' : 'bg-gray-100') : ''}
        `}
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={`
              p-2 rounded-lg transition-all duration-300
              ${isExpanded
                ? (darkMode ? 'bg-cyan-500/20' : 'bg-blue-100')
                : (darkMode ? 'bg-gray-700' : 'bg-gray-100')}
            `}>
              <Icon className={`w-4 h-4 ${isExpanded ? styles.accent : styles.textSecondary}`} />
            </div>
          )}
          <span className={`font-medium ${styles.text}`}>{title}</span>
        </div>
        <div className={`
          p-1 rounded-full transition-all duration-300
          ${isExpanded ? (darkMode ? 'bg-cyan-500/20' : 'bg-blue-100') : ''}
        `}>
          <svg
            className={`w-4 h-4 ${isExpanded ? styles.accent : styles.textSecondary} transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isExpanded && (
        <div className={`p-5 border-t ${styles.border} ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}>
          <div className="text-sm">
            {useRenderer && typeof children === 'string' ? (
              <ContentRenderer content={children} darkMode={darkMode} styles={styles} />
            ) : (
              children
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper para crear estilos basados en darkMode
export const createStyles = (darkMode) => ({
  bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
  bgCard: darkMode ? 'bg-gray-800' : 'bg-white',
  bgCardHover: darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
  bgSesion: darkMode ? 'bg-gray-850' : 'bg-gray-50',
  text: darkMode ? 'text-gray-100' : 'text-gray-900',
  textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
  textMuted: darkMode ? 'text-gray-500' : 'text-gray-400',
  border: darkMode ? 'border-gray-700' : 'border-gray-200',
  accent: darkMode ? 'text-cyan-400' : 'text-blue-600',
  accentBg: darkMode ? 'bg-cyan-500/10' : 'bg-blue-50',
  accentBorder: darkMode ? 'border-cyan-500/30' : 'border-blue-200',
  terminalBg: darkMode ? 'bg-black' : 'bg-gray-100',
  terminalText: darkMode ? 'text-green-400' : 'text-green-700',
  varkV: darkMode ? 'bg-purple-500/20 border-purple-500/30 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-700',
  varkA: darkMode ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700',
  varkR: darkMode ? 'bg-green-500/20 border-green-500/30 text-green-300' : 'bg-green-50 border-green-200 text-green-700',
  varkK: darkMode ? 'bg-orange-500/20 border-orange-500/30 text-orange-300' : 'bg-orange-50 border-orange-200 text-orange-700',
});
