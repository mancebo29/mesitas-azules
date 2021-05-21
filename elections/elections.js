const results = [
  { "name": "César Rondón", "women": 21, "total": 60, "men": 39, "image": "cesar_rondon.jpg" },
  { "name": "*No Existe*", "women": 30, "total": 34, "men": 4, "image": "richard_gonzalez.jpg" },
  { "name": "Gabriel Abreu (AKA: Heladito)", "women": 37, "total": 73, "men": 36, "image": "heladito.jpg" },
  { "name": "Jairo Mancebo", "women": 65, "total": 212, "men": 147, "image": "jairo_mancebo.jpg" },
  { "name": "Joaquín Facundo", "women": 48, "total": 124, "men": 76, "image": "joaquin_facundo.jpg" },
];

var winnerContainer = document.querySelector('.winners');
const template = winnerContainer.innerHTML;
let winnersHtml = '';

results.sort((a, b) => b.total - a.total).slice(0, 5).forEach((winner) => {
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
