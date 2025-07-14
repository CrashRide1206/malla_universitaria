const malla = [
  {
    semestre: 1,
    materias: [
      "CÁLCULO 1 [4]", "ÁLGEBRA LINEAL 1 [4]", "CULTURA FÍSICA DEPORTIVA [1]",
      "FUNDAMENTOS DE PROGRAMACIÓN [4]", "QUÍMICA BÁSICA [4]",
      "TALLER DE LENGUAJE [3]", "CÁTEDRA UIS [0]"
    ]
  },
  {
    semestre: 2,
    materias: [
      "CÁLCULO 2 [4]", "FÍSICA 1 [4]", "ÉTICA CIUDADANA [3]",
      "PROGRAMACIÓN ORIENTADA A OBJETOS [4]", "BIOLOGÍA PARA INGENIEROS [2]", "INGLÉS 1 [4]"
    ]
  },
  {
    semestre: 3,
    materias: [
      "CÁLCULO 3 [4]", "FÍSICA 2 [4]", "MATEMÁTICAS DISCRETAS [4]",
      "ESTRUCTURA DE DATOS Y ANÁLISIS DE ALGORITMOS [4]", "INGLÉS 2 [4]"
    ]
  },
  {
    semestre: 4,
    materias: [
      "ECUACIONES DIFERENCIALES [4]", "FÍSICA 3 [4]", "ELECTRICIDAD Y ELECTRÓNICA [4]",
      "BASES DE DATOS 1 [4]", "AUTÓMATAS Y LENGUAJES FORMALES [4]"
    ]
  },
  {
    semestre: 5,
    materias: [
      "BASES DE DATOS 2 [4]", "ANÁLISIS NUMÉRICO [4]", "SISTEMAS DIGITALES [4]",
      "DIRECCIÓN EMPRESARIAL [3]", "PENSAMIENTO SISTÉMICO Y ORGANIZACIONAL [4]"
    ]
  },
  {
    semestre: 6,
    materias: [
      "PROGRAMACIÓN EN LA WEB [4]", "ESTADÍSTICA 1 [4]", "ARQUITECTURA DE COMPUTADORES [4]",
      "REDES DE COMPUTADORES 1 [4]", "SISTEMAS DE INFORMACIÓN [4]"
    ]
  },
  {
    semestre: 7,
    materias: [
      "ESTADÍSTICA 2 [4]", "INTELIGENCIA ARTIFICIAL 1 [4]",
      "REDES DE COMPUTADORES 2 [4]", "INGENIERÍA DE SOFTWARE 1 [4]"
    ],
    electiva: "ELECTIVA 1"
  },
  {
    semestre: 8,
    materias: [
      "SIMULACIÓN DIGITAL [4]", "SISTEMAS OPERACIONALES [4]", "INGENIERÍA DE SOFTWARE 2 [4]"
    ],
    electiva: "ELECTIVA 2"
  },
  {
    semestre: 9,
    materias: [
      "INGENIERÍA ECONÓMICA [3]", "TRABAJO DE GRADO 1 [3]"
    ],
    electiva: "ELECTIVA 3"
  },
  {
    semestre: 10,
    materias: [
      "ECONOMÍA EMPRESARIAL [4]", "TRABAJO DE GRADO 2 [7]"
    ]
  }
];

const electivas = [
  "GERENCIA DE INFORMÁTICA I",
  "SEGURIDAD INFORMÁTICA",
  "ENTORNOS DE PROGRAMACIÓN",
  "TRATAMIENTO DE SEÑALES",
  "SISTEMAS DISCRETOS Y CONTINUOS",
  "MODELADO ESTRUCTURAL",
  "MICROCONTROLADORES I",
  "AUDITORÍA DE SISTEMAS",
  "INVESTIGACIÓN OPERACIONAL",
  "MODELOS A GRAN ESCALA",
  "GESTIÓN DE REDES EMPRESARIALES",
  "INTELIGENCIA ARTIFICIAL II",
  "MICROCONTROLADORES II",
  "TRABAJO DE INVESTIGACIÓN II",
  "INFORMÁTICA BIOMÉDICA",
  "SISTEMAS DISTRIBUIDOS",
  "INGENIERÍA DE SOFTWARE III",
  "INTELIGENCIA ARTIFICIAL III",
  "PROGRAMACIÓN DISTRIBUIDA",
  "COMPILADORES DE LENGUAJE",
  "INTERACCIÓN HOMBRE COMPUTADOR",
  "PROCESAMIENTO DE IMÁGENES DIGITALES",
  "ALGORITMOS I",
  "ANÁLISIS DE DATOS A GRAN ESCALA",
  "TRABAJO DE INVESTIGACIÓN I",
  "OPTIMIZACIÓN CONVEXA",
  "PRINCIPIOS Y PRÁCTICAS DE DESARROLLO DE SOFTWARE OO",
  "INTRODUCCIÓN A LA COMPUTACIÓN PARALELA",
  "INNOVACIÓN EDUCATIVA EN LA SOCIEDAD DE LA INFORMACIÓN",
  "MODELOS DE NEGOCIOS EN LA SOCIEDAD DE LA INFORMACIÓN",
  "VISIÓN POR COMPUTADOR",
  "ARQUITECTURA EMPRESARIAL",
  "GESTIÓN DEL CONOCIMIENTO"
];

const container = document.getElementById('malla');

malla.forEach(s => {
  const semestreDiv = document.createElement('div');
  semestreDiv.className = 'semestre';
  semestreDiv.innerHTML = `<h2>${s.semestre}° SEMESTRE</h2>`;
  
  s.materias.forEach(m => {
    const matDiv = document.createElement('div');
    matDiv.className = 'asignatura';
    matDiv.textContent = m;
    semestreDiv.appendChild(matDiv);
  });

  if (s.electiva) {
    const label = document.createElement('label');
    label.textContent = s.electiva + ": ";
    const select = document.createElement('select');
    electivas.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt;
      option.textContent = opt;
      select.appendChild(option);
    });
    semestreDiv.appendChild(label);
    semestreDiv.appendChild(select);
  }

  container.appendChild(semestreDiv);
});
