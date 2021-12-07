const results = [
  { name: "Fco. Gabriel Abreu C.", total: 88, image: "Heladito.jpeg" },
  { name: "Berlín Pérez", total: 61, image: "Gabby.jpg" },
  { name: "Jairo Mancebo", total: 147, image: "Mancebo.jpg" },
  { name: "Ripken Herrera", total: 58, image: "Ripken.png" },
  { name: "Deny D", total: 101, image: "Deny.jpg" },
  { name: "Ivette Guerrero Castillo", total: 72, image: "Ivette.jpeg" },
  { name: "Edward Pappaterra", total: 55, image: "Papaterra.jpg" },
  { name: "Annette Chabebe", total: 82, image: "Annette.jpg" },
  { name: "Neifis Vásquez", total: 92, image: "Neifis.jpg" },
];

var winnerContainer = document.querySelector('.winners');
const template = winnerContainer.innerHTML;
let winnersHtml = '';

results.sort((a, b) => b.total - a.total).forEach((winner) => {
  winnersHtml += template.replace(/\$\{(\w+)\}/g, (match, g1) => {
    switch (g1) {
      case 'name':
        return winner.name;
      case 'points':
        return winner.total;
      case 'picture':
        return winner.image;
    }
  });
})

winnerContainer.innerHTML = winnersHtml;

var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\$\{(\w+)\}/g, (match, g1) => replacements[g1]);
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 2000,
    delay: (el, i) => 60 * i
  }).add({
  targets: '.winner-entry',
  translateX: ["100vw", "0"],
  duration: 2500,
  easing: "easeOutExpo",
  delay: (el, i) => 800 * i
});
