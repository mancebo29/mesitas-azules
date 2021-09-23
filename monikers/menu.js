const decks = window.decks;

const getDeckHtml = (name) => `
    <a class="deck" href="game.html?deck=${name}">
      <span>${name}</span>
    </a>
`;

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
  const container = document.getElementById('decks');
  for (let name of Object.keys(decks)) {
    console.log(name);
    container.innerHTML += getDeckHtml(name);
  }
});

