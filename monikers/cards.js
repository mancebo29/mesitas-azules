const cards = [
  { title: "Mancebo metiéndole la lengua por la nariz a Annette", description: "Literalmente eso, Mancebo le meitó la lengua por la nariz a Annette en un coro en casa de Isa.", score: 2 },
  { title: "Amogus", description: "El meme que salió a partir del juego de deducción social Among Us. Es básicamente un humanoide sin brazos, pero con un traje liso que tiene un visor.", score: 2 },
  { title: "Davmi's pass", description: "Un ticket que te permite hacer uso (a discreción del portador) del güevo de Davmi.", score: 1 },
  { title: "La silla con el güevo", description: "Hay dos sillas, una tiene u güevo.", score: 1 },
  { title: "La silla con el bizcocho", description: "Hay dos sillas, una tiene un bizcocho.", score: 1 },
  { title: "Vaina", description: "Envoltura donde se encuentran semillas en una hilera.", score: 1 },
  { title: "El carajo", description: "Mandamos a las personas ahí cuando cometían una falta o nos sacan de quicio. ", score: 2 },
  { title: "Gorillaz", description: "Monos Cantantes", score: 2 },
  { title: "Itla", description: "Institucion llena de mongolos", score: 3 },
  { title: "Toreto", description: "Familia", score: 4 },
  { title: "Miércoles", description: "Precio? o It is My Dudes", score: 2 },
  { title: "Borracho", description: "MALDITA VIDA!", score: 3 },
  { title: "Yanalan", description: `Un pajaraso que se robó lo cualto de país, y ahora anda juyendo y to el mundo lo quiere linchar.
  Maldito Jean Alain"`, score: 1 },
  { title: "Robertico", description: "Un \"director de cine\" dominicano que nama sabe hacer clavos", score: 1 },
  { title: "42", description: "The answer to life, the universe and everything", score: 3 },
  { title: "Frito con salami", description: "Una exquisitez de la gastronomía dominicana, tradicionalmente degustado en la cena... A menos que seas Mozart La Para", score: 2 },
  { title: "Chicharrón", description: `Fritura exquisita que sale del cerdo.
  ""El chicharrón no es carne"" -Roberto Cavada"`, score: 1 },
  { title: "Eso son ribu o son nai?", description: "This is the rithym of the night pero mal cantao", score: 1 },
  { title: "Vete al diablo Davmi", description: "Frase dicha frecuentemente en las mesitas que involucra al hombre mono", score: 2 },
  { title: "Gartic phone", description: "Jueguito en el que ves un dibujo de otro pendejo y tratas de adivinar que dibujo ese pendejo... Mientras otro pendejo trata de adivinar tu dibujo abstracto", score: 3 },
  { title: "Pájaro, como el hijo de vegeta", description: "Naruto explicándole a Vegeta por que su hijo es pajaro", score: 3 },
  { title: "Broken picture phone", description: "Un jueguito web en el que se hace una historia con dibujos y palabras, y solamente tienes el contexto de quién dibujó antes que tú, y así sucesivamente", score: 3 },
  { title: "Exodia manifiestate!", description: `Frase que utiliza Yugi mientras le mete la mano a Kaiba con una carta pila de OP en la serie Yu-Gi-Oh.
  La carta se invoca al completar las 5 piezas de Exodia "`, score: 2 },
  { title: "Saco e' sal", description: "Se dice de persona con mala suerte, hasta la reparte", score: 2 },
  { title: "Daniel pero Dios mío", description: "Un integrante del Discord de las mesitas con una nalga muy redonda y bonita.", score: 2 },
  { title: "Wilmor", description: "La persona con la nariz más grande de las mesitas", score: 1 },
  { title: "Trasero", description: "Lo que le hace falta a Wilmor", score: 3 },
  { title: "Floppa", description: "Una especie de gato (caracal) que se ha vuelto un meme, y es de los favoritos de Mancebo", score: 1 },
  { title: "Cocomordan", description: "Nombre que recibe la capacidad de ejercer una considerable presión voluntaria sobre el miembro masculino durante el coito, a través del músculo pubocoxígeo o el constrictor de la vagina y de otros ubicados a su alrededor.", score: 2 },
  { title: "Pichichi", description: "Lo que solo tiene Wilmor.", score: 4 },
  { title: "Las mesitas azules", description: "El coro de APEC que se ha mudado para Discord, probablemente los que estén jugando sean parte de las mesitas, al menos la mayoría", score: 1 },
  { title: "La bolita", description: `Escultura de un globo terráqueo ubicado en la Churchill llegando al malecón.
  Suele ser frecuentado por las leathers."`, score: 1 },
  { title: "Kirbo", description: "Poyo! ", score: 1 },
  { title: "La mamá de la mamá de la mamá de la mamá de la mamá de la mamá...", description: `Un dembow que habla de la descendencia materna de una familia.
  Escrito por el ilustre dembowsero ""El Alfa"""`, score: 1 },
  { title: "El Golpe de la Perra Bizca", description: "Es cuando uno esta en el acto sexual y la mujer se encuentra en cuatro segundos antes de alcanzar el orgasmo o climax, el hombre procede a sujetar a la mujer por los cabellos con la mano izquierda y al penetrarla profundamente le propina un verdadero mata pollo en la espalda con mucha fuerza a lo que la mujer solo puede virar los ojos y queda bizca del golpe, esto provoca que la mujer apriete el pene del hombre del golopon mal dado y este termine dentro de ella y ella quede tirada en la cama bizca del tremendo viaje. Eso es el golpe de la perra bizca.", score: 4 },
  { title: "Penis Batman", description: "Hace referencia a un miembro viril masculino que lleva como traje el iconico atuendo de superheroes del Caballero de la Noche, Batman", score: 2 },
  { title: "El Lunar de Ripken", description: "Marca de nacimiento del novio de Odelis, Ripken Herrera, ubicado en su nariz.", score: 1 },
  { title: "Yonaguni", description: `kyō wa sekkusushitai
  demo anata to dake
  doko ni imasu ka?
    doko ni imasu ka?

    La canción que volvió a todos los fans de Bad Bunny en Otaku al mencionar a Itachi... Also una isla en Japón`, score:	2 },
  { title: "Popola Higueyana", description: "Parte femenina originaria de Higuey", score: 2 },
  { title: "Firulai", description: `Nombre que se le otorga a los perros cuando uno no se sabe el nombre de ellos.
  Viene del gringo ""free of lice""... The more you know"`, score: 1 },
  { title: "La Razon por la que Davmi se salió del grupo", description: "Explicación muy detallada de la razón por la cual el Ing. Davmi Ogando se retiró por un tiempo del grupo y todos los coros relacionados con Las Mesitas.", score: 4 },
  { title: "Motoristas", description: "Se atraviesan en tu camino sin ningún miramiento.", score: 3 },
  { title: "El lidel", description: "Nombre que se le otorga al glorioso ex-presidente de la República Dominicana Leonel Fernández", score: 1 },
  { title: "Monikers", description: `Monikers is a party game based on the public domain game Celebrity, where players take turns attempting to get their teammates to guess names by describing or imitating well-known people.

  In the first round, clue givers can say anything they want, except for the name itself. For the second round, clue givers can only say one word. And in the final round, clue givers can’t say anything at all: they can only use gestures and charades.

    Based on the public domain game known as Celebrities.`, score:	1 },
  { title: "El Pacha", description: "Infame presentador dominicano", score: 2 },
  { title: "31 Minutos", description: "Programa de noticias falsas chilenos protagonizado por marionetas.", score: 2 },
  { title: "MILF", description: `Mother i'ld like to fuck
  Una mujer con hijos que ta buenísima y tu se lo quiere meter"`, score: 1 },
  { title: "Choco Monkeys", description: "Intento de canal de YouTube de algunos miembros de APEC diferentes a los mismos que pertenecen a Las Mesitas Club.", score: 3 },
  { title: "DILF", description: `Dad i'ld like to fuck
  Un hombre con hijos que ta buenísimo y tu quiere que te lo meta, sí, aunque seas hombre"`, score: 1 },
  { title: "Las Mesitas Azules", description: "Objeto y a su vez, grupo de amigos/conocidos de la Universidad APEC que se reunen a charlar o como se denomina en Republica Dominicana, hacer coro, tanto de forma presencial como virtual.", score: 2 },
  { title: "Discord", description: "Aplicacion que se utiliza para charlar mientras se juega.", score: 1 },
  { title: "[REDACTED]", description: "[REDACTED]", score: 4 },
  { title: "Isa", description: "Persona que rara vez es invitada a un coro de Las Mesitas.", score: 1 },
  { title: "El Cibao", description: "Región de República Dominicana que no existe.", score: 4 },
  { title: "El Gallo Lester", description: "Artista y personalidad dominicana, precursora del movimiento musical \"El Mambo Metal\".", score: 4 },
  { title: "Osvaldo", description: "Primo de Wilmor", score: 4 },
  { title: "La familia", description: "Lo mas importante para Toretto (Vin Diesel)", score: 1 },
  { title: "kkposting.exe", description: "Grupo y posteriormente pagina de memes dominicanos.", score: 3 },
  { title: "Floppa", description: "Nombre por el que es conocido el animal favorito de Mancebo", score: 4 },
  { title: "Flopola", description: "Nombre que se utiliza para hacer referencia a la vagina de una mujer con labios pronunciados.", score: 4 },
  { title: "Don Comedia", description: "Carlos Duran", score: 4 },
  { title: "Wellington Quiw", description: "Comedor de Mangos Maraquetones y primo de Luka.", score: 4 },
  { title: "Soporte mi locura", description: "Segunda voz de videos cristianos", score: 4 },
  { title: "The Devil but My God", description: "DIABLODIOSMIO", score: 4 },
  { title: "Bobo e' lo que hay", description: "There is pacifier", score: 3 },
  { title: "Un hombre con un guevaso en unos joggers grises", description: "Tu quiere ma de ahí? Goloso/a", score: 4 },
  { title: "Triangulitos de leche condensada", description: `Una delicia que hacía Nestlé.. leche condensada de diferentes sabores en tubitos y triangulitos, pero ya no lo hacen.
  #bringitback"`, score: 3 },
  { title: "Camila", description: "Mejor amiga de la mejor amiga de Mancebo.", score: 1 },
  { title: "Ayyy Claclaclaaa", description: "Lo que te dicen cuando haces algo malo.", score: 3 },
  { title: "Richard", description: "No existe", score: 1 },
  { title: "Mancebo haciendo la charada del chupacabra", description: "*schlurp schlurp* BEEEEEHHH", score: 3 }
];

let cardsInUse = cards;
let timeout, interval;
let currentIndex = 0;
let currentTeam = null;

const scores = { a: 0, b: 0 };

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function save() {
  localStorage.setItem('cards', JSON.stringify({ cardsInUse, scores }));
}

function start() {
  const previousSession = localStorage.getItem('cards');
  const session = JSON.parse(previousSession);
  if (previousSession && session && session.cardsInUse.length
    && (session.scores.a || session.scores.b)) {
    if (confirm("Parece que había otro juego en progreso. Seguir con ese?")) {
      console.log(session);
      cardsInUse = session.cardsInUse;
      scores.a = session.scores.a;
      scores.b = session.scores.b;
      updateScores();
    }
  }
}

function updateScores() {
  const elem = document.getElementById('scores');
  elem.innerText = `A: ${scores.a}\t\tB: ${scores.b}`;
}

function updateCards() {
  const elem = document.getElementById('cards-left');
  elem.innerText = `${currentIndex + 1}/${cardsInUse.length}`;
}

function nextRound() {
  cardsInUse = cards;
}

function getCards() {
  cardsInUse = shuffle(cardsInUse);
  currentIndex = 0;

  displayCard();
}

function displayCard() {
  console.log(currentIndex, cardsInUse);
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const score = document.getElementById('score');

  const card = cardsInUse[currentIndex];
  updateCards();
  title.innerText = card.title;
  description.innerText = card.description;
  score.innerText = card.score;
  // img.setAttribute('src', cardsInUse[currentIndex].url);
}

function hideCard() {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const score = document.getElementById('score');

  title.innerText = '';
  description.innerText = '';
  score.innerText = '';
  save();
}

function handleGuess() {
  const card = cardsInUse[currentIndex];
  scores[currentTeam] += card.score;
  cardsInUse.splice(currentIndex, 1);
  updateScores();
  if (currentIndex === cardsInUse.length) {
    currentIndex = 0;
  }
  if (cardsInUse.length === 0) {
    clearTimeout(timeout);
    clearInterval(interval);
    hideCard();
    nextRound();
  } else {
    displayCard();
  }
}

function handleSkip() {
  currentIndex++;
  if (currentIndex === cardsInUse.length) {
    currentIndex = 0;
  }
  displayCard();
}

function handleStart() {
  currentTeam = currentTeam === 'a' ? 'b' : 'a';
  const turn = document.getElementById('turn');
  turn.innerText = `Turno de ${currentTeam.toUpperCase()}`
  getCards();
  updateCards();
  updateScores();
  const timer = document.getElementById('timer');
  let time = 59;
  interval = setInterval(() => {
    timer.innerText = `${time--}`;
  }, 1000);
  timeout = setTimeout(() => {
    while(!confirm('Tiempo!')) {}
    clearInterval(interval);
    hideCard();
  }, time * 1000 + 1000);
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
    evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
  if ( ! xDown || ! yDown ) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
    if ( xDiff > 0 ) {
      handleGuess();
    } else {
      handleSkip();
    }
  } else {
    if ( yDiff > 0 ) {
      /* down swipe */
    } else {
      /* up swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
};

document.onreadystatechange = () => {
  start();
  const startBtn = document.getElementById('start');
  startBtn.onclick = () => {
    handleStart();
  }
}
