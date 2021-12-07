const results = [

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
