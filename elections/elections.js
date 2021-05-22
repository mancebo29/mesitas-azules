const results = [
  { name: "Jairo Mancebo", total: 140, image: "Jairo Mancebo.jpeg" },
  { name: "Gabriel *Heladito* Abreu", total: 69, image: "Gabriel Abreu.png" },
  { name: "Daniel Rodriguez", total: 0, image: "Daniel Lopez.jpg" },
  { name: "Dennyse Dominguez", total: 80, image: "dennyse dominguez.jpg" },
  { name: "Joaquín Facundo", total: 47, image: "sus.jpg" },
  { name: "Ken Sosa", total: 158, image: "Ken Ramos.jpeg" },
  { name: "Neifis Vásquez", total: 18, image: "Neifis Vásquez Ferreras.jpg" },
  { name: "NO fucking Pussyflake, weak ass Merino", total: 2, image: "Lenin Salazar Sanchez.jpg" },
  { name: "Luis Merino", total: 91, image: "Luis Merino.png" },
  { name: "Carlos Cabreja ", total: 8, image: "Carlos Cabreja.jpg" },
  { name: "Richard González", total: 23, image: "richard gonzalez.jpg" },
  { name: "José Martínez", total: 23, image: "Jose Ricardo Martinez.png" },
  { name: "Wilmor Medina", total: 69, image: "Wilmor Antonio.jpg" },
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
