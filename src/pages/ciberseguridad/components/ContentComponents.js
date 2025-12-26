import React from 'react';
import {
  Zap, Users, FileText, Layers, CheckSquare, Target,
  Clock, Package, Terminal, Eye, Wrench, BookOpen
} from 'lucide-react';

// Componente para renderizar contenido con formato mejorado
export const ContentRenderer = ({ content, darkMode, styles: propStyles }) => {
  if (!content) return null;

  // Estilos por defecto si no se proporcionan
  const styles = propStyles || {
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    accent: darkMode ? 'text-cyan-400' : 'text-blue-600',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
  };

  // Clases CSS para highlighting
  const keywordClass = darkMode ? 'text-cyan-400 font-semibold' : 'text-blue-600 font-semibold';
  const quoteClass = darkMode ? 'text-yellow-400 italic' : 'text-amber-600 italic';

  // Detectar y parsear bloques de código ```language ... ```
  const parseCodeBlocks = (text) => {
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;
    const blocks = [];
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      blocks.push({
        language: match[1] || 'text',
        code: match[2],
        start: match.index,
        end: match.index + match[0].length,
        fullMatch: match[0]
      });
    }

    return blocks;
  };

  // Detectar pseudocódigo sin triple backticks
  const parsePseudocodeBlocks = (text) => {
    const lines = text.split('\n');
    const blocks = [];
    let pseudoLines = [];
    let blockStart = -1;
    let inPseudo = false;

    // Patrones que indican pseudocódigo
    const pseudoPatterns = [
      /^ALGORITMO[:\s]/i,
      /^(INICIO|FIN)$/i,
      /^\d+\.\s*(Inicio|Fin)$/i,
      /^(SI|MIENTRAS|PARA)\s+.+\s+(ENTONCES|HACER|HASTA)/i,
      /^(SINO|FIN SI|FIN MIENTRAS|FIN PARA)$/i,
      /^(LEER|ESCRIBIR|RETORNAR)\s+/i,
      /^(VARIABLES|CONSTANTES)$/i,
      /←|→/,
      /^\s*(def|class|import|from|if|else|elif|for|while|return|try|except|with)\s+/,
      /^\s*#\s*(Mi primer|Programa|Script|Código|Función)/i,
    ];

    // Patrones para líneas que continúan un bloque
    const continuationPatterns = [
      /^\s+[A-ZÁÉÍÓÚÑ_a-z]/,  // Línea indentada
      /^(intentos|usuario|contraseña|autenticado|acceso)[:\s←]/i,
      /^[A-Z_]+\s*←/,  // Asignación de variable en mayúsculas
      /^\s*(SI|SINO|MIENTRAS|PARA|FIN)/i,
      /^\s*(LEER|ESCRIBIR)/i,
      /^\s*(def|class|if|else|elif|for|while|return|print|import)/,
      /^\s*#/,  // Comentario
      /^\s*logging\./,
      /^\s*time\./,
      /^\s*[a-z_]+\s*=/,  // Asignación Python
    ];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Verificar si la línea inicia un bloque de pseudocódigo
      const startsBlock = pseudoPatterns.some(p => p.test(trimmedLine));
      // Verificar si la línea continúa un bloque
      const continuesBlock = inPseudo && (
        continuationPatterns.some(p => p.test(line)) ||
        /^\s+/.test(line) ||  // Cualquier línea indentada
        trimmedLine === '' ||  // Línea vacía dentro del bloque
        /^[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ_]*(\s*←|\s*:)/.test(trimmedLine)  // Variable mayúscula
      );

      if (startsBlock && !inPseudo) {
        inPseudo = true;
        blockStart = i;
        pseudoLines = [line];
      } else if (inPseudo && continuesBlock) {
        pseudoLines.push(line);
      } else if (inPseudo) {
        // Fin del bloque de pseudocódigo
        if (pseudoLines.length >= 2) {
          // Remover líneas vacías al final
          while (pseudoLines.length > 0 && !pseudoLines[pseudoLines.length - 1].trim()) {
            pseudoLines.pop();
          }
          if (pseudoLines.length >= 2) {
            const code = pseudoLines.join('\n');
            // Determinar si es Python o pseudocódigo
            const isPython = pseudoLines.some(l =>
              /^\s*(def|class|import|from|if|else|elif|for|while|return|try|except|with|print|logging|time)\s*/.test(l)
            );
            blocks.push({
              language: isPython ? 'python' : 'pseudocode',
              code: code,
              startLine: blockStart,
              endLine: i - 1,
              lines: pseudoLines.length
            });
          }
        }
        inPseudo = false;
        pseudoLines = [];

        // Verificar si esta línea inicia un nuevo bloque
        if (startsBlock) {
          inPseudo = true;
          blockStart = i;
          pseudoLines = [line];
        }
      }
    }

    // Capturar último bloque si termina al final
    if (inPseudo && pseudoLines.length >= 2) {
      while (pseudoLines.length > 0 && !pseudoLines[pseudoLines.length - 1].trim()) {
        pseudoLines.pop();
      }
      if (pseudoLines.length >= 2) {
        const code = pseudoLines.join('\n');
        const isPython = pseudoLines.some(l =>
          /^\s*(def|class|import|from|if|else|elif|for|while|return|try|except|with|print|logging|time)\s*/.test(l)
        );
        blocks.push({
          language: isPython ? 'python' : 'pseudocode',
          code: code,
          startLine: blockStart,
          endLine: lines.length - 1,
          lines: pseudoLines.length
        });
      }
    }

    return blocks;
  };

  // Aplicar syntax highlighting básico
  const highlightSyntax = (code, language) => {
    const lines = code.split('\n');

    // Patrones para diferentes lenguajes
    const patterns = {
      python: {
        keywords: /\b(def|class|if|else|elif|for|while|return|import|from|as|try|except|finally|with|lambda|and|or|not|in|is|True|False|None|break|continue|pass|raise|yield|async|await|global|nonlocal)\b/g,
        strings: /(["'`])((?:\\.|(?!\1)[^\\])*?)\1|f(["'])((?:\\.|(?!\3)[^\\])*?)\3/g,
        comments: /#.*$/gm,
        functions: /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
        numbers: /\b(\d+\.?\d*)\b/g,
        decorators: /@\w+/g,
      },
      javascript: {
        keywords: /\b(const|let|var|function|return|if|else|for|while|class|new|this|async|await|import|export|from|try|catch|finally|throw|typeof|instanceof|true|false|null|undefined)\b/g,
        strings: /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g,
        comments: /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        functions: /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
        numbers: /\b(\d+\.?\d*)\b/g,
      },
      pseudocode: {
        keywords: /\b(ALGORITMO|INICIO|FIN|SI|ENTONCES|SINO|FIN SI|MIENTRAS|HACER|FIN MIENTRAS|PARA|HASTA|FIN PARA|LEER|ESCRIBIR|RETORNAR|VARIABLES|CONSTANTES|ENTERO|REAL|TEXTO|LOGICO|VERDADERO|FALSO)\b/gi,
        strings: /(["'])((?:\\.|(?!\1)[^\\])*?)\1/g,
        comments: /\/\/.*$/gm,
        operators: /[←→≤≥≠=<>+\-*/]/g,
      }
    };

    const lang = patterns[language] || patterns.python;

    return lines.map((line, lineIdx) => {
      let processedLine = line;
      const elements = [];
      let currentIndex = 0;

      // Detectar comentarios primero (tienen prioridad)
      const commentMatch = processedLine.match(lang.comments);
      if (commentMatch) {
        const commentStart = processedLine.indexOf(commentMatch[0]);
        if (commentStart >= 0) {
          // Texto antes del comentario
          const beforeComment = processedLine.substring(0, commentStart);
          elements.push({ type: 'code', content: beforeComment });
          elements.push({ type: 'comment', content: commentMatch[0] });
          processedLine = '';
        }
      }

      if (processedLine) {
        elements.push({ type: 'code', content: processedLine });
      }

      return {
        lineNumber: lineIdx + 1,
        elements,
        raw: line
      };
    });
  };

  // Renderizar bloque de código con diseño mejorado
  const renderCodeBlock = (codeBlock, idx) => {
    const { language, code } = codeBlock;
    const lines = code.split('\n').filter((line, i, arr) => {
      // Remover líneas vacías al inicio y final
      if (i === 0 && !line.trim()) return false;
      if (i === arr.length - 1 && !line.trim()) return false;
      return true;
    });

    const languageLabels = {
      python: 'Python',
      javascript: 'JavaScript',
      js: 'JavaScript',
      pseudocode: 'Pseudocódigo',
      bash: 'Terminal',
      shell: 'Terminal',
      sql: 'SQL',
      html: 'HTML',
      css: 'CSS',
      json: 'JSON',
      text: 'Texto',
    };

    const languageColors = {
      python: 'from-yellow-500 to-blue-500',
      javascript: 'from-yellow-400 to-yellow-600',
      js: 'from-yellow-400 to-yellow-600',
      pseudocode: 'from-purple-500 to-pink-500',
      bash: 'from-green-500 to-emerald-600',
      shell: 'from-green-500 to-emerald-600',
      sql: 'from-orange-500 to-red-500',
      text: 'from-gray-500 to-gray-600',
    };

    // Syntax highlighting colors
    const syntaxColors = {
      keyword: darkMode ? 'text-purple-400' : 'text-purple-600',
      string: darkMode ? 'text-green-400' : 'text-green-600',
      comment: darkMode ? 'text-gray-500 italic' : 'text-gray-400 italic',
      function: darkMode ? 'text-yellow-400' : 'text-yellow-600',
      number: darkMode ? 'text-orange-400' : 'text-orange-600',
      operator: darkMode ? 'text-cyan-400' : 'text-cyan-600',
      decorator: darkMode ? 'text-pink-400' : 'text-pink-600',
    };

    // Aplicar highlighting simple
    const highlightLine = (line) => {
      if (!line) return <span>&nbsp;</span>;

      // Patrones de sintaxis
      const patterns = [
        // Comentarios (# o //)
        { regex: /(#.*$|\/\/.*$)/g, class: syntaxColors.comment },
        // Strings
        { regex: /(["'`])(?:\\.|(?!\1)[^\\])*?\1/g, class: syntaxColors.string },
        // f-strings de Python
        { regex: /f(["'])(?:\\.|(?!\1)[^\\])*?\1/g, class: syntaxColors.string },
        // Keywords Python
        { regex: /\b(def|class|if|else|elif|for|while|return|import|from|as|try|except|finally|with|lambda|and|or|not|in|is|True|False|None|break|continue|pass|raise|yield|async|await|global|nonlocal|ALGORITMO|INICIO|FIN|SI|ENTONCES|SINO|MIENTRAS|HACER|LEER|ESCRIBIR|VARIABLES|CONSTANTES|ENTERO|REAL|TEXTO|LOGICO|VERDADERO|FALSO|TERMINAR)\b/g, class: syntaxColors.keyword },
        // Funciones
        { regex: /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, class: syntaxColors.function },
        // Números
        { regex: /\b(\d+\.?\d*)\b/g, class: syntaxColors.number },
        // Operadores especiales de pseudocódigo
        { regex: /[←→≤≥≠]/g, class: syntaxColors.operator },
        // Decoradores
        { regex: /@\w+/g, class: syntaxColors.decorator },
      ];

      let result = line;
      const replacements = [];

      // Primero detectar comentarios (tienen prioridad)
      const commentMatch = line.match(/(#.*$|\/\/.*$)/);
      if (commentMatch) {
        const commentIndex = line.indexOf(commentMatch[0]);
        const beforeComment = line.substring(0, commentIndex);
        const comment = commentMatch[0];

        return (
          <span>
            {highlightLine(beforeComment)}
            <span className={syntaxColors.comment}>{comment}</span>
          </span>
        );
      }

      // Detectar strings
      const stringRegex = /(f?)(["'`])(?:\\.|(?!\2)[^\\])*?\2/g;
      let stringMatch;
      let lastIndex = 0;
      const parts = [];

      while ((stringMatch = stringRegex.exec(line)) !== null) {
        if (stringMatch.index > lastIndex) {
          parts.push({ type: 'code', content: line.substring(lastIndex, stringMatch.index) });
        }
        parts.push({ type: 'string', content: stringMatch[0] });
        lastIndex = stringRegex.lastIndex;
      }

      if (lastIndex < line.length) {
        parts.push({ type: 'code', content: line.substring(lastIndex) });
      }

      if (parts.length === 0) {
        parts.push({ type: 'code', content: line });
      }

      return (
        <span>
          {parts.map((part, pIdx) => {
            if (part.type === 'string') {
              return <span key={pIdx} className={syntaxColors.string}>{part.content}</span>;
            }

            // Aplicar highlighting al código restante
            let content = part.content;

            // Keywords
            content = content.replace(
              /\b(def|class|if|else|elif|for|while|return|import|from|as|try|except|finally|with|lambda|and|or|not|in|is|True|False|None|break|continue|pass|raise|yield|async|await|global|nonlocal|ALGORITMO|INICIO|FIN|SI|ENTONCES|SINO|MIENTRAS|HACER|LEER|ESCRIBIR|VARIABLES|CONSTANTES|ENTERO|REAL|TEXTO|LOGICO|VERDADERO|FALSO|TERMINAR|FIN SI|FIN MIENTRAS)\b/g,
              '⟨KW⟩$1⟨/KW⟩'
            );

            // Funciones
            content = content.replace(
              /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g,
              '⟨FN⟩$1⟨/FN⟩'
            );

            // Números
            content = content.replace(
              /\b(\d+\.?\d*)\b/g,
              '⟨NUM⟩$1⟨/NUM⟩'
            );

            // Operadores especiales
            content = content.replace(
              /([←→≤≥≠])/g,
              '⟨OP⟩$1⟨/OP⟩'
            );

            // Decoradores
            content = content.replace(
              /(@\w+)/g,
              '⟨DEC⟩$1⟨/DEC⟩'
            );

            // Convertir marcadores a spans
            const segments = content.split(/(⟨\/?(?:KW|FN|NUM|OP|DEC)⟩)/);
            let currentClass = null;
            const result = [];

            segments.forEach((seg, sIdx) => {
              if (seg === '⟨KW⟩') currentClass = syntaxColors.keyword;
              else if (seg === '⟨FN⟩') currentClass = syntaxColors.function;
              else if (seg === '⟨NUM⟩') currentClass = syntaxColors.number;
              else if (seg === '⟨OP⟩') currentClass = syntaxColors.operator;
              else if (seg === '⟨DEC⟩') currentClass = syntaxColors.decorator;
              else if (seg.startsWith('⟨/')) currentClass = null;
              else if (seg) {
                result.push(
                  currentClass
                    ? <span key={`${pIdx}-${sIdx}`} className={currentClass}>{seg}</span>
                    : seg
                );
              }
            });

            return <span key={pIdx}>{result}</span>;
          })}
        </span>
      );
    };

    return (
      <div key={idx} className={`my-4 rounded-xl overflow-hidden ${darkMode ? 'shadow-lg shadow-black/30' : 'shadow-lg shadow-gray-300/50'}`}>
        {/* Header del bloque de código */}
        <div className={`flex items-center justify-between px-4 py-2 bg-gradient-to-r ${languageColors[language] || languageColors.text}`}>
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-white/90 text-xs font-medium ml-2">
              {languageLabels[language] || language}
            </span>
          </div>
          <Terminal className="w-4 h-4 text-white/70" />
        </div>

        {/* Cuerpo del código */}
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} overflow-x-auto`}>
          <pre className="p-0 m-0">
            <code className="block text-sm font-mono">
              {lines.map((line, lineIdx) => (
                <div
                  key={lineIdx}
                  className={`flex ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100'} transition-colors`}
                >
                  {/* Número de línea */}
                  <span className={`
                    select-none px-3 py-0.5 text-right min-w-[3rem] border-r
                    ${darkMode
                      ? 'bg-gray-800/50 text-gray-600 border-gray-700'
                      : 'bg-gray-100 text-gray-400 border-gray-200'}
                  `}>
                    {lineIdx + 1}
                  </span>
                  {/* Contenido de la línea */}
                  <span className={`px-4 py-0.5 flex-1 whitespace-pre ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {highlightLine(line)}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    );
  };

  // Detectar y parsear TODAS las tablas markdown en el contenido
  const parseAllTables = (text) => {
    const lines = text.split('\n');
    const tables = [];
    let tableLines = [];
    let tableStart = -1;
    let inTable = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          tableStart = i;
          inTable = true;
        }
        tableLines.push(line);
      } else if (inTable) {
        // Fin de una tabla
        if (tableLines.length >= 2) {
          const headerLine = tableLines[0];
          const headers = headerLine.split('|').filter(h => h.trim()).map(h => h.trim());
          const dataRows = tableLines.slice(2).map(row =>
            row.split('|').filter(c => c.trim()).map(c => c.trim())
          );
          tables.push({
            headers,
            rows: dataRows,
            startLine: tableStart,
            endLine: tableStart + tableLines.length
          });
        }
        tableLines = [];
        inTable = false;
      }
    }

    // Capturar última tabla si termina al final del texto
    if (inTable && tableLines.length >= 2) {
      const headerLine = tableLines[0];
      const headers = headerLine.split('|').filter(h => h.trim()).map(h => h.trim());
      const dataRows = tableLines.slice(2).map(row =>
        row.split('|').filter(c => c.trim()).map(c => c.trim())
      );
      tables.push({
        headers,
        rows: dataRows,
        startLine: tableStart,
        endLine: tableStart + tableLines.length
      });
    }

    return tables;
  };

  // Formatear contenido de celda (negritas, código, etc.)
  const formatCellContent = (cell) => {
    if (!cell) return cell;

    // Procesar negritas **texto**
    let formatted = cell;
    const boldParts = formatted.split(/(\*\*[^*]+\*\*)/g);

    return boldParts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className={styles.accent}>{part.slice(2, -2)}</strong>;
      }
      // Procesar código `texto`
      const codeParts = part.split(/(`[^`]+`)/g);
      return codeParts.map((codePart, cIdx) => {
        if (codePart.startsWith('`') && codePart.endsWith('`')) {
          return (
            <code key={`${idx}-${cIdx}`} className={`px-1.5 py-0.5 rounded text-xs font-mono ${darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-gray-200 text-blue-600'}`}>
              {codePart.slice(1, -1)}
            </code>
          );
        }
        return codePart;
      });
    });
  };

  // Renderizar tabla estilizada mejorada
  const renderTable = (tableData, tableIdx) => (
    <div key={tableIdx} className={`my-4 overflow-x-auto rounded-xl ${darkMode ? 'shadow-lg shadow-cyan-500/5' : 'shadow-lg shadow-blue-500/10'}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className={darkMode
            ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600'
            : 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500'}>
            {tableData.headers.map((header, idx) => (
              <th key={idx} className={`px-4 py-3 text-left text-white font-bold text-sm tracking-wide
                ${idx === 0 ? 'rounded-tl-xl' : ''}
                ${idx === tableData.headers.length - 1 ? 'rounded-tr-xl' : ''}
                border-r border-white/10 last:border-r-0`}>
                {formatCellContent(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={`
              ${rowIdx % 2 === 0
                ? (darkMode ? 'bg-gray-800/60' : 'bg-gray-50/80')
                : (darkMode ? 'bg-gray-700/40' : 'bg-white')}
              ${darkMode ? 'hover:bg-cyan-900/40' : 'hover:bg-blue-50'}
              transition-all duration-200 group
              ${rowIdx === tableData.rows.length - 1 ? 'rounded-b-xl' : ''}
            `}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className={`px-4 py-3 text-sm ${styles.text}
                  border-b ${styles.border} border-r ${styles.border} last:border-r-0
                  ${cellIdx === 0 ? 'font-medium' : ''}
                  ${rowIdx === tableData.rows.length - 1 && cellIdx === 0 ? 'rounded-bl-xl' : ''}
                  ${rowIdx === tableData.rows.length - 1 && cellIdx === row.length - 1 ? 'rounded-br-xl' : ''}
                  group-hover:${darkMode ? 'text-cyan-300' : 'text-blue-700'} transition-colors`}>
                  {formatCellContent(cell)}
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

    // Detectar títulos con negritas markdown **Título:**
    const boldTitleMatch = trimmedLine.match(/^\*\*([^*]+)\*\*:?$/);
    if (boldTitleMatch) {
      return (
        <h5 key={lIdx} className={`font-bold ${styles.accent} mt-4 mb-2 flex items-center gap-2`}>
          <Zap className="w-4 h-4" />
          {boldTitleMatch[1]}
        </h5>
      );
    }

    // Detectar títulos/headers en mayúsculas
    if (/^[A-ZÁÉÍÓÚÑ\s]+:$/.test(trimmedLine) || /^(PASO|SECCIÓN|PARTE|ESTACIÓN)\s+\d+/i.test(trimmedLine)) {
      return (
        <h5 key={lIdx} className={`font-bold ${styles.accent} mt-4 mb-2 flex items-center gap-2`}>
          <Zap className="w-4 h-4" />
          {trimmedLine}
        </h5>
      );
    }

    // Detectar subtítulos con negritas al inicio **Texto:** descripción
    const boldStartMatch = trimmedLine.match(/^\*\*([^*]+)\*\*\s*(.*)$/);
    if (boldStartMatch && boldStartMatch[2]) {
      return (
        <div key={lIdx} className={`${styles.textSecondary} mt-2`}>
          <span className={`font-semibold ${styles.accent}`}>{boldStartMatch[1]}</span>
          {boldStartMatch[2] && <span> {formatText(boldStartMatch[2])}</span>}
        </div>
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

  // Renderizar contenido formateado con soporte para múltiples tablas y bloques de código
  const renderFormattedContent = (text) => {
    // Primero extraer bloques de código explícitos (con ```)
    const codeBlocks = parseCodeBlocks(text);
    let processedText = text;
    const codePlaceholders = {};

    // Reemplazar bloques de código con placeholders
    codeBlocks.forEach((block, idx) => {
      const placeholder = `___CODE_BLOCK_${idx}___`;
      codePlaceholders[placeholder] = block;
      processedText = processedText.replace(block.fullMatch, placeholder);
    });

    // Ahora parsear tablas en el texto sin bloques de código
    const tables = parseAllTables(processedText);
    const lines = processedText.split('\n');
    const parts = [];

    if (tables.length === 0) {
      // Sin tablas, renderizar todo como texto
      parts.push({ type: 'text', content: processedText });
    } else {
      // Con tablas, dividir contenido en segmentos
      let lastEndLine = 0;

      tables.forEach((table, tIdx) => {
        // Texto antes de la tabla
        const beforeTable = lines.slice(lastEndLine, table.startLine).join('\n');
        if (beforeTable.trim()) {
          parts.push({ type: 'text', content: beforeTable });
        }

        // La tabla
        parts.push({ type: 'table', content: table, index: tIdx });

        lastEndLine = table.endLine;
      });

      // Texto después de la última tabla
      const afterLastTable = lines.slice(lastEndLine).join('\n');
      if (afterLastTable.trim()) {
        parts.push({ type: 'text', content: afterLastTable });
      }
    }

    // Función para renderizar texto que puede contener placeholders de código y pseudocódigo
    const renderTextWithCode = (textContent, keyPrefix) => {
      // Verificar si hay placeholders de código explícito
      const codeRegex = /___CODE_BLOCK_(\d+)___/g;
      const segments = [];
      let lastIndex = 0;
      let match;

      while ((match = codeRegex.exec(textContent)) !== null) {
        // Texto antes del placeholder
        if (match.index > lastIndex) {
          segments.push({ type: 'text', content: textContent.substring(lastIndex, match.index) });
        }
        // El bloque de código
        segments.push({ type: 'code', placeholder: match[0] });
        lastIndex = match.index + match[0].length;
      }

      // Texto después del último placeholder
      if (lastIndex < textContent.length) {
        segments.push({ type: 'text', content: textContent.substring(lastIndex) });
      }

      if (segments.length === 0) {
        segments.push({ type: 'text', content: textContent });
      }

      return segments.map((seg, segIdx) => {
        if (seg.type === 'code') {
          const codeBlock = codePlaceholders[seg.placeholder];
          return renderCodeBlock(codeBlock, `${keyPrefix}-code-${segIdx}`);
        }

        // Buscar pseudocódigo sin backticks en el texto
        const pseudoBlocks = parsePseudocodeBlocks(seg.content);

        if (pseudoBlocks.length === 0) {
          // Sin pseudocódigo, renderizar como texto normal
          const paragraphs = seg.content.split('\n\n');
          return (
            <div key={`${keyPrefix}-text-${segIdx}`} className="space-y-3">
              {paragraphs.map((para, pIdx) => {
                const paraLines = para.split('\n');
                return (
                  <div key={pIdx} className="space-y-1.5">
                    {paraLines.map((line, lIdx) => renderLine(line, `${pIdx}-${lIdx}`))}
                  </div>
                );
              })}
            </div>
          );
        }

        // Con pseudocódigo, dividir y renderizar
        const textLines = seg.content.split('\n');
        const elements = [];
        let lastEndLine = 0;

        pseudoBlocks.forEach((pBlock, pbIdx) => {
          // Texto antes del pseudocódigo
          if (pBlock.startLine > lastEndLine) {
            const beforePseudo = textLines.slice(lastEndLine, pBlock.startLine).join('\n');
            if (beforePseudo.trim()) {
              const paragraphs = beforePseudo.split('\n\n');
              elements.push(
                <div key={`${keyPrefix}-before-${pbIdx}`} className="space-y-3">
                  {paragraphs.map((para, pIdx) => {
                    const paraLines = para.split('\n');
                    return (
                      <div key={pIdx} className="space-y-1.5">
                        {paraLines.map((line, lIdx) => renderLine(line, `${pIdx}-${lIdx}`))}
                      </div>
                    );
                  })}
                </div>
              );
            }
          }

          // El bloque de pseudocódigo
          elements.push(
            renderCodeBlock(
              { language: pBlock.language, code: pBlock.code },
              `${keyPrefix}-pseudo-${pbIdx}`
            )
          );

          lastEndLine = pBlock.endLine + 1;
        });

        // Texto después del último pseudocódigo
        if (lastEndLine < textLines.length) {
          const afterPseudo = textLines.slice(lastEndLine).join('\n');
          if (afterPseudo.trim()) {
            const paragraphs = afterPseudo.split('\n\n');
            elements.push(
              <div key={`${keyPrefix}-after`} className="space-y-3">
                {paragraphs.map((para, pIdx) => {
                  const paraLines = para.split('\n');
                  return (
                    <div key={pIdx} className="space-y-1.5">
                      {paraLines.map((line, lIdx) => renderLine(line, `${pIdx}-${lIdx}`))}
                    </div>
                  );
                })}
              </div>
            );
          }
        }

        return <div key={`${keyPrefix}-text-${segIdx}`}>{elements}</div>;
      });
    };

    return parts.map((part, idx) => {
      if (part.type === 'table') {
        return renderTable(part.content, `table-${idx}`);
      }

      return (
        <div key={idx}>
          {renderTextWithCode(part.content, `part-${idx}`)}
        </div>
      );
    });
  };

  return <div className="content-renderer">{renderFormattedContent(content)}</div>;
};

// Componente para renderizar actividades con mejor formato
export const ActivityRenderer = ({ actividad, darkMode, styles: propStyles }) => {
  // Estilos por defecto si no se proporcionan
  const styles = propStyles || {
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-500' : 'text-gray-400',
    accent: darkMode ? 'text-cyan-400' : 'text-blue-600',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
  };

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
export const VarkCards = ({ vark, darkMode, styles: propStyles }) => {
  // Estilos por defecto si no se proporcionan
  const styles = propStyles || {
    varkV: darkMode ? 'bg-purple-500/20 border-purple-500/30 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-700',
    varkA: darkMode ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700',
    varkR: darkMode ? 'bg-green-500/20 border-green-500/30 text-green-300' : 'bg-green-50 border-green-200 text-green-700',
    varkK: darkMode ? 'bg-orange-500/20 border-orange-500/30 text-orange-300' : 'bg-orange-50 border-orange-200 text-orange-700',
  };

  return (
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
};

// Componente ExpandableContent mejorado
export const ExpandableContent = ({ id, title, children, icon: Icon, darkMode, styles: propStyles, expandedContent, toggleContent, useRenderer = true }) => {
  // Estilos por defecto si no se proporcionan
  const styles = propStyles || {
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    accent: darkMode ? 'text-cyan-400' : 'text-blue-600',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    bgCard: darkMode ? 'bg-gray-800' : 'bg-white',
    bgCardHover: darkMode ? 'hover:bg-gray-750' : 'hover:bg-gray-50',
  };

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
