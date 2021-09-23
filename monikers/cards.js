let cardsInUse = getDeck();
let timeout, interval;
let currentIndex = 0;
let currentTeam = null;
let inGame = false;
let guessed = [];
let lastGuessed = false;

const scores = { a: 0, b: 0 };

function getDeck() {
  const url = new URL(window.location);
  const deck = url.searchParams.get("deck");
  return window.decks[deck];
}

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
  cardsInUse = getDeck();
}

function getCards() {
  cardsInUse = shuffle(cardsInUse);
  currentIndex = 0;

  displayCard();
}

function displayCard() {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const score = document.getElementById('score');

  const card = cardsInUse[currentIndex];
  updateCards();
  title.innerText = card.title;
  if (isValidHttpUrl(card.description)) {
    description.innerHTML = `<img src="${card.description}" />`;
  } else {
    description.innerText = card.description;
  }
  score.innerText = card.score;
}

function hideCard() {
  inGame = false;
  const startBtn = document.getElementById('start');
  startBtn.innerText = 'Comenzar'
  startBtn.classList.remove('rounded-circle');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const score = document.getElementById('score');

  title.innerText = '';
  description.innerText = '';
  score.innerText = '';
  save();
}

function handleGuess() {
  if (!inGame) return;
  const card = cardsInUse[currentIndex];
  scores[currentTeam] += card.score;
  const [lastCard] = cardsInUse.splice(currentIndex, 1);
  guessed.push(lastCard);
  lastGuessed = true;
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
  if (!inGame) return;
  currentIndex++;
  lastGuessed = false;
  if (currentIndex === cardsInUse.length) {
    currentIndex = 0;
  }
  displayCard();
}

function handleUndo() {
  if (!inGame) return;
  if (lastGuessed) {
    const lastCard = guessed.pop();
    if (!lastCard) return;
    cardsInUse.splice(currentIndex, 0, lastCard);
  } else {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = cardsInUse.length - 1;
    }
  }
  displayCard();
}

function handleStart() {
  currentTeam = currentTeam === 'a' ? 'b' : 'a';
  const turn = document.getElementById('turn');
  turn.innerText = `Turno de ${currentTeam.toUpperCase()}`;
  inGame = true;
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

  if (!inGame) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
    if ( xDiff > 0 ) {
      handleSkip();
    } else {
      handleGuess();
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

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function withConfirmation(cb) {
  return () => {
    if (window.confirm('Estás seguro?')) {
      cb();
    }
  }
}

function endTurn() {
  clearTimeout(timeout);
  clearInterval(interval);
  hideCard();
}

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(() => {
  start();
  const startBtn = document.getElementById('start');
  const skipBtn = document.getElementById('skip');
  const acceptBtn = document.getElementById('accept');
  const endTurnBtn = document.getElementById('endTurn');
  const goBackBtn = document.getElementById('goBack');

  startBtn.onclick = () => {
    if (inGame) {
      handleUndo();
    } else {
      handleStart();
      startBtn.innerHTML = '&#11176;';
      startBtn.classList.add('rounded-circle');
    }
  }

  skipBtn.onclick = handleSkip;
  acceptBtn.onclick = handleGuess;
  endTurnBtn.onclick = withConfirmation(endTurn);
  goBackBtn.onclick = withConfirmation(window.history.back);
});
