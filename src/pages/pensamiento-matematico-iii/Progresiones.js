const progresiones = [
    {
        id: '1',
        title: 'INTUICIÓN SOBRE CONCEPTOS CENTRALES DEL CÁLCULO',
        content: {
            descripcion: 'Genera intuición sobre conceptos como variación promedio, variación instantánea, procesos infinitos y movimiento a través de la revisión de las contribuciones que desde la filosofía y la matemática hicieron algunas y algunos personajes históricos en la construcción de ideas centrales para el origen del cálculo.',
            metas: 'M1 Observa y obtiene información de una situación o fenómeno para establecer estrategias o formas de visualización que ayuden a entenderlo',
            categorias: 'C2 Procesos de intuición y razonamiento.',
            subcategorias: 'S1 Capacidad para observar y conjeturar'
        }
    },
    {
        id: '2',
        title: 'ANÁLISIS DEL PROBLEMA DE LA RECTA TANGENTE',
        content: {
            descripcion: 'Analiza de manera intuitiva algunos de los problemas que dieron origen al cálculo diferencial, en particular el problema de determinar la recta tangente a una curva en un punto dado.',
            metas: [
                'M3 Aplica procedimientos, técnicas y lenguaje matemático para la solución de problemas propios del Pensamiento Matemático, de Áreas de Conocimiento, Recursos Sociocognitivos, Recursos Socioemocionales y de su entorno.',
                'M1 Describe situaciones o fenómenos empleando rigurosamente el lenguaje matemático y el lenguaje natural.'
            ],
            categorias: [
                'C3 Solución de problemas y modelación.',
                'C4 Interacción y lenguaje matemático.'
            ],
            subcategorias: [
                'S3 Estrategias heurísticas y ejecución de procedimientos no rutinarios.',
                'S2 Negociación de significados.'
            ]
        }
    },
    {
        id: '3',
        title: 'MODELACIÓN CON FUNCIONES REALES',
        content: {
            descripcion: 'Revisa situaciones y fenómenos donde el cambio es parte central en su estudio, con la finalidad de modelarlos aplicando algunos conocimientos básicos de funciones reales de variable real y las operaciones básicas entre ellas.',
            metas: 'M1 Construye un modelo matemático, identificando las variables de interés, con la finalidad de explicar una situación o fenómeno y/o resolver un problema tanto teórico como de su entorno.',
            categorias: 'C3 Solución de problemas y modelación.',
            subcategorias: 'S1 Uso de modelos'
        }
    },
    {
        id: '4',
        title: 'ANÁLISIS GRÁFICO DE FUNCIONES I',
        content: {
            descripcion: 'Analiza la gráfica de funciones de variable real buscando simetrías, y revisa conceptos como continuidad, crecimiento, decrecimiento, máximos y mínimos relativos, concavidades, entre otros, resaltando la importancia de éstos en la modelación y el estudio matemático.',
            metas: 'M1 Observa y obtiene información de una situación o fenómeno para establecer estrategias o formas de visualización que ayuden a entenderlo.',
            categorias: 'C2 Procesos de intuición y razonamiento.',
            subcategorias: [
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.'
            ]
        }
    },
    {
        id: '5',
        title: 'ANÁLISIS GRÁFICO DE FUNCIONES II',
        content: {
            descripcion: 'Analiza la gráfica de funciones de variable real buscando simetrías, y revisa conceptos como continuidad, crecimiento, decrecimiento, máximos y mínimos relativos, concavidades, entre otros, resaltando la importancia de éstos en la modelación y el estudio matemático.',
            metas: 'M1 Observa y obtiene información de una situación o fenómeno para establecer estrategias o formas de visualización que ayuden a entenderlo.',
            categorias: 'C2 Procesos de intuición y razonamiento.',
            subcategorias: [
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.'
            ]
        }
    },
    {
        id: '6',
        title: 'CONTINUIDAD Y LÍMITES',
        content: {
            descripcion: 'Identifica y contextualiza la continuidad de funciones utilizadas en la modelación de situaciones y fenómenos y hace un estudio, utilizando el concepto de límite, de las implicaciones de la continuidad de una función tanto dentro del desarrollo matemático mismo, como de sus aplicaciones en la modelación.',
            metas: [
                'M1 Observa y obtiene información de una situación o fenómeno para establecer estrategias o formas de visualización que ayuden a entenderlo.',
                'M2 Socializa con sus pares sus conjeturas, descubrimientos o procesos en la solución de un problema tanto teórico como de su entorno.'
            ],
            categorias: [
                'C2 Procesos de intuición y razonamiento.',
                'C4 Interacción y lenguaje matemático.'
            ],
            subcategorias: [
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.',
                'S3 Ambiente matemático de comunicación.'
            ]
        }
    },
    {
        id: '7',
        title: 'CONCEPTO DE DERIVADA',
        content: {
            descripcion: 'Interpreta, a partir de integrar diferentes perspectivas y métodos, el concepto central del cálculo diferencial, "la derivada", de forma intuitiva e intenta dar una definición formal, así como la búsqueda heurística para encontrar la derivada de la función constante, lineal y algunas funciones polinomiales.',
            metas: [
                'M2 Analiza los resultados obtenidos al aplicar procedimientos algorítmicos propios del Pensamiento Matemático en la resolución de problemáticas teóricas y de su contexto.',
                'M2 Desarrolla la percepción y la intuición para generar conjeturas ante situaciones que requieren explicación o interpretación.'
            ],
            categorias: [
                'C1 Procedural.',
                'C2 Procesos de intuición y razonamiento.'
            ],
            subcategorias: [
                'S2 Elementos geométricos.',
                'S3 Elementos variacionales.',
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.'
            ]
        }
    },
    {
        id: '8',
        title: 'REGLAS DE DERIVACIÓN',
        content: {
            descripcion: 'Encuentra de manera heurística algunas reglas de derivación como la regla de la suma, la regla del producto, la regla del cociente y la regla de la cadena y las aplica en algunos ejemplos.',
            metas: [
                'M3 Compara hechos, opiniones o afirmaciones para organizarlos en formas lógicas útiles en la solución de problemas y explicación de situaciones y fenómenos.',
                'M4 Construye y plantea posibles soluciones a problemas de Áreas de Conocimiento, Recursos Sociocognitivos, Recursos Socioemocionales y de su entorno, empleando técnicas y lenguaje matemático.'
            ],
            categorias: [
                'C2 Procesos de intuición y razonamiento.',
                'C3 Solución de problemas y modelación.'
            ],
            subcategorias: [
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.',
                'S3 Pensamiento formal.',
                'S3 Estrategias heurísticas y ejecución de procedimientos no rutinarios.'
            ]
        }
    },
    {
        id: '9',
        title: 'DERIVADA COMO RAZÓN DE CAMBIO',
        content: {
            descripcion: 'Selecciona una problemática en la que el cambio sea un factor fundamental en su estudio para aplicar el concepto de la derivada como razón de cambio instantánea.',
            metas: 'M2 Construye un modelo matemático, identificando las variables de interés, con la finalidad de explicar una situación o fenómeno y/o resolver un problema tanto teórico como de su entorno.',
            categorias: 'C3 Solución de problemas y modelación.',
            subcategorias: 'S2 Construcción de modelos.'
        }
    },
    {
        id: '10',
        title: 'ANÁLISIS DE FUNCIONES CON DERIVADAS',
        content: {
            descripcion: 'Explica y socializa el papel de la derivada para analizar una función (donde crece/decrece, máximo/mínimos locales, concavidades) y traza su gráfica.',
            metas: [
                'M3 Comprueba los procedimientos usados en la resolución de problemas utilizando diversos métodos, empleando recursos tecnológicos o la interacción con sus pares.',
                'M4 Argumenta a favor o en contra de afirmaciones acerca de situaciones, fenómenos o problemas propios de la matemática, de las ciencias o de su contexto.',
                'M2 Socializa con sus pares sus conjeturas, descubrimientos o procesos en la solución de un problema tanto teórico como de su entorno.'
            ],
            categorias: [
                'C1 Procedural.',
                'C2 Procesos de intuición y razonamiento.',
                'C4 Interacción y lenguaje matemático.'
            ],
            subcategorias: [
                'S3 Elementos variacionales.',
                'S1 Pensamiento formal.',
                'S1 Registro escrito, simbólico, algebraico e iconográfico.',
                'S3 Ambiente matemático de comunicación.'
            ]
        }
    },
    {
        id: '11',
        title: 'PROBLEMAS DE OPTIMIZACIÓN',
        content: {
            descripcion: 'Resuelve problemas de su entorno o de otras áreas del conocimiento empleando funciones y aplicando la derivada (e.g. problemas de optimización), organiza su procedimiento y lo somete a debate.',
            metas: [
                'M4 Argumenta a favor o en contra de afirmaciones acerca de situaciones, fenómenos o problemas propios de la matemática, de las ciencias o de su contexto.',
                'M4 Construye y plantea posibles soluciones a problemas de Áreas de Conocimiento, Recursos Sociocognitivos, Recursos Socioemocionales y de su entorno, empleando técnicas y lenguaje matemático.',
                'M2 Socializa con sus pares sus conjeturas, descubrimientos o procesos en la solución de un problema tanto teórico como de su entorno.'
            ],
            categorias: [
                'C2 Procesos de intuición y razonamiento.',
                'C3 Solución de problemas y modelación.',
                'C4 Interacción y lenguaje matemático.'
            ],
            subcategorias: [
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.',
                'S3 Pensamiento formal.',
                'S2 Construcción de modelos.',
                'S3 Estrategias heurísticas y ejecución de procedimientos no rutinarios.',
                'S3 Ambiente matemático de comunicación.'
            ]
        }
    },
    {
        id: '12',
        title: 'FUNCIONES EXPONENCIALES Y LOGARÍTMICAS',
        content: {
            descripcion: 'Examina la gráfica de funciones logarítmicas con diferentes bases y las gráficas de las funciones exponenciales para describirlas y realizar afirmaciones sobre el significado de que la función exponencial y logarítmicas de base "a" sean funciones inversas entre sí.',
            metas: [
                'M3 Compara hechos, opiniones o afirmaciones para organizarlos en formas lógicas útiles en la solución de problemas y explicación de situaciones y fenómenos.',
                'M2 Construye un modelo matemático, identificando las variables de interés, con la finalidad de explicar una situación o fenómeno y/o resolver un problema tanto teórico como de su entorno.'
            ],
            categorias: [
                'C2 Procesos de intuición y razonamiento.',
                'C3 Solución de problemas y modelación.'
            ],
            subcategorias: [
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.',
                'S3 Pensamiento formal.',
                'S2 Construcción de modelos.'
            ]
        }
    },
    {
        id: '13',
        title: 'FUNCIONES TRIGONOMÉTRICAS',
        content: {
            descripcion: 'Analiza y describe un fenómeno en el que la periodicidad sea un constituyente fundamental a través del estudio de propiedades básicas funciones trigonométricas.',
            metas: [
                'M2 Desarrolla la percepción y la intuición para generar conjeturas ante situaciones que requieren explicación o interpretación.',
                'M2 Construye un modelo matemático, identificando las variables de interés, con la finalidad de explicar una situación o fenómeno y/o resolver un problema tanto teórico como de su entorno.'
            ],
            categorias: [
                'C2 Procesos de intuición y razonamiento.',
                'C3 Solución de problemas y modelación.'
            ],
            subcategorias: [
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.',
                'S2 Construcción de modelos.'
            ]
        }
    },
    {
        id: '14',
        title: 'MODELACIÓN CON FUNCIONES DERIVABLES',
        content: {
            descripcion: 'Selecciona una problemática, situación o fenómeno tanto real como ficticio para modelarlo utilizando funciones derivables.',
            metas: [
                'M4 Argumenta a favor o en contra de afirmaciones acerca de situaciones, fenómenos o problemas propios de la matemática, de las ciencias o de su contexto.',
                'M2 Construye un modelo matemático, identificando las variables de interés, con la finalidad de explicar una situación o fenómeno y/o resolver un problema tanto teórico como de su entorno.',
                'M3 Organiza los procedimientos empleados en la solución de un problema a través de argumentos formales para someterlo a debate o a evaluación.'
            ],
            categorias: [
                'C2 Procesos de intuición y razonamiento.',
                'C3 Solución de problemas y modelación.',
                'C4 Interacción y lenguaje matemático.'
            ],
            subcategorias: [
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.',
                'S3 Pensamiento formal.',
                'S1 Uso de modelos.',
                'S2 Construcción de modelos.',
                'S3 Estrategias heurísticas y ejecución de procedimientos no rutinarios.',
                'S2 Negociación de significados.',
                'S3 Ambiente matemático de comunicación.'
            ]
        }
    },
    {
        id: '15',
        title: 'TEOREMA FUNDAMENTAL DEL CÁLCULO',
        content: {
            descripcion: 'Considera y revisa algunas ideas subyacentes al teorema fundamental del cálculo.',
            metas: 'M4 Argumenta a favor o en contra de afirmaciones acerca de situaciones, fenómenos o problemas propios de la matemática, de las ciencias o de su contexto.',
            categorias: 'C2 Procesos de intuición y razonamiento.',
            subcategorias: [
                'S1 Capacidad para observar y conjeturar.',
                'S2 Pensamiento intuitivo.',
                'S3 Pensamiento formal.'
            ]
        }
    }
];

export default progresiones;