const materias = [
  // SEMESTRE 1
  { nombre: "CALCULO 1", semestre: 1 },
  { nombre: "ALGEBRA LINEAL 1", semestre: 1 },
  { nombre: "CULTURA FISICA DEPORTIVA", semestre: 1 },
  { nombre: "FUNDAMENTOS DE PROGRAMACION", semestre: 1 },
  { nombre: "QUIMICA BASICA", semestre: 1 },
  { nombre: "TALLER DE LENGUAJE", semestre: 1 },
  { nombre: "CATEDRA UIS", semestre: 1 },
  // SEMESTRE 2
  { nombre: "CALCULO 2", semestre: 2, requisitos: ["CALCULO 1"] },
  { nombre: "FISICA 1", semestre: 2 },
  { nombre: "ETICA CIUDADANA", semestre: 2 },
  { nombre: "PROGRAMACION ORIENTADA A OBJETOS", semestre: 2, requisitos: ["FUNDAMENTOS DE PROGRAMACION"] },
  { nombre: "BIOLOGIA PARA INGENIEROS", semestre: 2, requisitos: ["QUIMICA BASICA"] },
  { nombre: "INGLES 1", semestre: 2 },
  // SEMESTRE 3
  { nombre: "CALCULO 3", semestre: 3, requisitos: ["CALCULO 2"] },
  { nombre: "FISICA 2", semestre: 3, requisitos: ["FISICA 1", "CALCULO 1"] },
  { nombre: "MATEMATICAS DISCRETAS", semestre: 3, requisitos: ["ALGEBRA LINEAL 1"] },
  { nombre: "ESTRUCTURA DE DATOS Y ANALISIS DE ALGORITMOS", semestre: 3, requisitos: ["PROGRAMACION ORIENTADA A OBJETOS"] },
  { nombre: "INGLES 2", semestre: 3, requisitos: ["INGLES 1"] },
  // SEMESTRE 4
  { nombre: "ECUACIONES DIFERENCIALES", semestre: 4, requisitos: ["CALCULO 3"] },
  { nombre: "FISICA 3", semestre: 4, requisitos: ["FISICA 2", "CALCULO 2"] },
  { nombre: "ELECTRICIDAD Y ELECTRONICA", semestre: 4, requisitos: ["FISICA 2"] },
  { nombre: "BASES DE DATOS 1", semestre: 4, requisitos: ["ESTRUCTURA DE DATOS Y ANALISIS DE ALGORITMOS"] },
  { nombre: "AUTOMATAS Y LENGUAJES FORMALES", semestre: 4, requisitos: ["MATEMATICAS DISCRETAS"] },
  // SEMESTRE 5
  { nombre: "BASES DE DATOS 2", semestre: 5, requisitos: ["BASES DE DATOS 1"] },
  { nombre: "ANALISIS NUMERICO", semestre: 5, requisitos: ["ECUACIONES DIFERENCIALES"] },
  { nombre: "SISTEMAS DIGITALES", semestre: 5, requisitos: ["ELECTRICIDAD Y ELECTRONICA"] },
  { nombre: "DIRECCION EMPRESARIAL", semestre: 5 },
  { nombre: "PENSAMIENTO SISTEMICO Y ORGANIZACIONAL", semestre: 5, requisitos: ["ECUACIONES DIFERENCIALES", "BIOLOGIA PARA INGENIEROS"] },
  // SEMESTRE 6
  { nombre: "PROGRAMACION EN LA WEB", semestre: 6, requisitos: ["PROGRAMACION ORIENTADA A OBJETOS"] },
  { nombre: "ESTADISTICA 1", semestre: 6, requisitos: ["CALCULO 3", "MATEMATICAS DISCRETAS"] },
  { nombre: "ARQUITECTURA DE COMPUTADORES", semestre: 6, requisitos: ["SISTEMAS DIGITALES"] },
  { nombre: "REDES DE COMPUTADORES 1", semestre: 6, requisitos: ["AUTOMATAS Y LENGUAJES FORMALES"] },
  { nombre: "SISTEMAS DE INFORMACION", semestre: 6, requisitos: ["DIRECCION EMPRESARIAL", "BASES DE DATOS 1"] },
  // SEMESTRE 7
  { nombre: "ESTADISTICA 2", semestre: 7, requisitos: ["ESTADISTICA 1"] },
  { nombre: "INTELIGENCIA ARTIFICIAL 1", semestre: 7, requisitos: ["BASES DE DATOS 1"] },
  { nombre: "REDES DE COMPUTADORES 2", semestre: 7, requisitos: ["REDES DE COMPUTADORES 1"] },
  { nombre: "INGENIERIA DE SOFTWARE 1", semestre: 7, requisitos: ["SISTEMAS DE INFORMACION"] },
  // SEMESTRE 8
  { nombre: "SIMULACION DIGITAL", semestre: 8, requisitos: ["ESTADISTICA 1"] },
  { nombre: "SISTEMAS OPERACIONALES", semestre: 8, requisitos: ["ARQUITECTURA DE COMPUTADORES"] },
  { nombre: "INGENIERIA DE SOFTWARE 2", semestre: 8, requisitos: ["INGENIERIA DE SOFTWARE 1"] },
  // SEMESTRE 9
  { nombre: "INGENIERIA ECONOMICA", semestre: 9, requisitos: ["CALCULO 3"] },
  { nombre: "TRABAJO DE GRADO 1", semestre: 9 },
  // SEMESTRE 10
  { nombre: "ECONOMIA EMPRESARIAL", semestre: 10, requisitos: ["SISTEMAS DE INFORMACION"] },
  { nombre: "TRABAJO DE GRADO 2", semestre: 10, requisitos: ["TRABAJO DE GRADO 1"] }
];

const materiasRealizadas = new Set();
const malla = document.getElementById('malla');

function crearBotonMateria(materia) {
  const btn = document.createElement('button');
  btn.textContent = materia.nombre;
  btn.classList.add('materia');

  const verificarEstado = () => {
    if (materia.requisitos && !materia.requisitos.every(r => materiasRealizadas.has(r))) {
      btn.disabled = true;
      btn.classList.add('bloqueada');
    } else {
      btn.disabled = false;
      btn.classList.remove('bloqueada');
    }
  };

  verificarEstado();

  btn.addEventListener('click', () => {
    if (!btn.disabled) {
      btn.classList.add('realizada');
      btn.disabled = true;
      materiasRealizadas.add(materia.nombre);
      actualizarMaterias();
    }
  });

  materia.elemento = btn;
  return btn;
}

function actualizarMaterias() {
  materias.forEach(m => {
    if (m.elemento) {
      if (m.requisitos && m.requisitos.every(r => materiasRealizadas.has(r))) {
        m.elemento.disabled = false;
        m.elemento.classList.remove('bloqueada');
      }
    }
  });
}

function construirMalla() {
  const totalSemestres = Math.max(...materias.map(m => m.semestre));
  for (let i = 1; i <= totalSemestres; i++) {
    const columna = document.createElement('div');
    columna.className = 'semestre';
    columna.innerHTML = `<h2>Semestre ${i}</h2>`;

    materias.filter(m => m.semestre === i).forEach(m => {
      const btn = crearBotonMateria(m);
      columna.appendChild(btn);
    });

    malla.appendChild(columna);
  }
}

construirMalla();
