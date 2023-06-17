/* 
  {
    question: '',
    answers: {
      a: '',
      b: '',
      c: ''
    },
    goodAnswer: '',
    image: ''
  }
  
*/

const questionsEs = { a: [
  
  {
    question: '¿Cuántos puertos tiene Ometepe?',
    answers: {
      a: '1 (Puerto Sandino)',
      b: '2 (Puerto San Jorge y Puerto San Juan del Sur)',
      c: '3 (Puerto de Moyogalpa,Puerto las Brisas y Puerto de Gracia )'
    },
    goodAnswer: 'c',
    image: 'q_puertos'
  },
  {
    question: '¿Cuáles son las fiesta patronales más grandes de Ometepe?',
    answers: {
      a: 'Santo Domingo y San Gerónimo',
      b: 'Nuestra señora de Fátima y San Juan ',
      c: 'Santa Ana y San Diego de Alcalá'
    },
    goodAnswer: 'c',
    image: 'q_santaana'
  },
  {
    question: 'Cual es el río más grande de la isla de ometepe?',
    answers: {
      a: 'Río Istian',
      b: 'Río Buen Suceso',
      c: 'Río Sacramento'
    },
    goodAnswer: 'a',
    image: 'q_istian'
  },
  {
    question: '¿Cual fue el primer colegio secundaria fundado en Ometepe ?',
    answers: {
      a: 'Inst. Nacional Jaime Marzá',
      b: 'Inst Nacional Ladislao Chwalbinsky',
      c: 'Ninguna de las Anteriores'
    },
    goodAnswer: 'b',
    image: 'colegio'
  },
   {
    question: '¿Dónde se pueden apreciar las esculturas de piedra hechas por la cultura chorotega ?',
    answers: {
      a: 'Museo de Altagracia',
      b: 'Parroquia San Diego de Alcalá',
      c: 'Museo el Ceibo'
    },
    goodAnswer: 'b',
    image: 'chavalos'
  },
   {
     question: 'Cual es la religión que más predomina en la isla de ometepe?',
     answers: {
       a: 'Religión evangénlica',
       b: 'Religión Católica',
       c: 'Testigo de Jehova'
     },
     goodAnswer: 'b',
     image: 'iglesia'
   },
   {
     question: '¿Cuál es el significado  náhuatl de “Altagracia y Moyogalpa"?',
     answers: {
       a: 'Casa de los Cuzucos y Pueblo de Cultura',
       b: 'Casa de las Garzas y Pueblo de Zancudos o Mosquitos',
       c: 'A y B son correctas'
     },
     goodAnswer: 'b',
     image: 'moyogalpa'
   },
  {
    question: '¿En qué lugar está ubicada punta Jesús María ?',
    answers: {
      a: 'Altagracia',
      b: 'San José',
      c: 'Moyogalpa'
    },
    goodAnswer: 'c',
    image: 'q_punta'
  },
  
  {
    question: '¿Qué sitio turístico está relacionado con la leyenda de chico largo?',
    answers: {
      a: 'El tesoro del pirata',
      b: 'Charco Verde',
      c: 'Laguna Volcán Madera'
    },
    goodAnswer: 'b',
    image: 'chico'
  },
  {
    question: '¿A qué departamento pertenece la Isla de Ometepe?',
    answers: {
      a: 'Masaya',
      b: 'Rivas',
      c: 'Rio San Juan'
    },
    goodAnswer: 'b',
    image: 'nicaragua'
  },
  {
    question: '¿En qué fecha fue nombra la Isla Ometepe como  "Reserva de Biosfera"?',
    answers: {
      a: '2 de Junio de 2010',
      b: '16 d Diciembre 2005',
      c: '15 de Septiembre del 2014'
    },
    goodAnswer: 'a',
    image: 'ometepe'
  },
  {
    question: '¿Cuales de la playas Ometepina tiene la historia del Caballo de Oro?',
    answers: {
      a: 'Playa Taguizapa',
      b: 'Paso Real',
      c: 'Ninguna es correcta'
    },
    goodAnswer: 'b',
    image: 'caballo'
  },
  {
    question: '¿Cual es el nombre  nahuatl del volcan maderas?',
    answers: {
      a: 'coatlan(significa lugar donde vive el sol)',
      b: 'tametzona(significa luz de luna)',
      c: 'aquetzalli(significa agua preciosa)'
    },
    goodAnswer: 'a',
    image: 'madera'
  },
  {
    question: '¿Cuál es la extensión territorial de la “Isla de Ometepe”?',
    answers: {
      a: '280.5km2',
      b: '276km2',
      c: '267km2'
    },
    goodAnswer: 'b',
    image: 'territorial'
  },
  {
    question: '¿Cuál es la altura de la cascada San Ramón? ',
    answers: {
      a: '25 Metros',
      b: '68 Metros ',
      c: '56 Metros'
    },
    goodAnswer: 'c',
    image: 'q-cascada'
  },
  {
    question: 'Que sitio turístico de la isla de ometepe fabrica chocolate orgánico?',
    answers: {
      a: 'Finca Venecia ',
      b: 'El pital ',
      c: 'La Estancia'
    },
    goodAnswer: 'b',
    image: 'q-pital'
  },
  {
    question: 'Cuáles son los nombres con los que se denomina a la isla de Ometepe?',
    answers: {
      a: 'Reserva de biosfera',
      b: 'Isla de Lagos y volcanes',
      c: 'Oasis de paz',
      d: 'Todas son correctas'
    },
    goodAnswer: 'd',
    image: 'ometepe'
  },
  {
    question: '¿Que significa Ometepe en náhuatl?',
    answers: {
      a: 'Dos volcanes',
      b: 'Oasis de paz',
      c: 'Tierra del lago'
    },
    goodAnswer: 'a',
    image: 'ometepe'
  },
  {
    question: '¿En qué lago está ubicada la isla de Ometepe?',
    answers: {
      a: 'Cocibolca',
      b: 'Xolotlán',
      c: 'Todas son correctas'
    },
    goodAnswer: 'a',
    image: 'lago'
  },
  {
    question: '¿Cuántos volcanes posee la isla de ometepe? ',
    answers: {
      a: 'Dos:Madera y Concepción',
      b: 'Uno: Momotombo',
      c: 'Ninguna es correcta'
    },
    goodAnswer: 'a',
    image: 'volcanes'
  }
]};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { questionsEs, shuffleArray };