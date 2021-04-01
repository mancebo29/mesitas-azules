const results = {
  "men": [
    { "name": "César Rondón", "women": 21, "total": 60, "men": 39, "image": "rondon.jpg" },
    { "name": "*No Existe*", "women": 30, "total": 34, "men": 4, "image": "richard.jpg" },
    { "name": "Manuel Almanzar (AKA: Polar)", "women": 11, "total": 45, "men": 34 },
    { "name": "Ken Sosa", "women": 8, "total": 42, "men": 34 },
    { "name": "Emmanuel Polanco", "women": 0, "total": 10, "men": 10 },
    { "name": "Gabriel Abreu (AKA: Heladito)", "women": 37, "total": 73, "men": 36, "image": "heladito.jpg" },
    { "name": "Jairo Mancebo", "women": 65, "total": 212, "men": 147, "image": "mancebo.jpg" },
    { "name": "Neifis Vásquez", "women": 0, "total": 11, "men": 11 },
    { "name": "Jeffrey Martinez", "women": 0, "total": 8, "men": 8 },
    { "name": "Henry Vásquez", "women": 1, "total": 10, "men": 9 },
    { "name": "Jades Durán", "women": 20, "total": 41, "men": 21 },
    { "name": "Holiviel Valdez", "women": 3, "total": 3, "men": 0 },
    { "name": "Diego Torres", "women": 0, "total": 40, "men": 40, "image": "diego.jpg" },
    { "name": "Gilbert Peña", "women": 11, "total": 45, "men": 34 },
    { "name": "Daniel Rodríguez", "women": 8, "total": 9, "men": 1 },
    { "name": "Manuel Pellerano", "women": 3, "total": 3, "men": 0 },
    { "name": "Luis Merino", "women": 25, "total": 37, "men": 12 },
    { "name": "José Martinez (AKA: Ricky, Docky, Cíclope)", "women": 0, "total": 0, "men": 0 },
    { "name": "Jam Reyna", "women": 6, "total": 41, "men": 35 },
    { "name": "Julio Marte", "women": 8, "total": 41, "men": 33 },
    { "name": "Ripken Herrrera", "women": 36, "total": 82, "men": 46, "image": "ripken.jpg" },
    { "name": "José Rodríguez", "women": 26, "total": 46, "men": 20 },
    { "name": "Hairo Rodríguez", "women": 1, "total": 10, "men": 9 },
    { "name": "Joaquín Facundo", "women": 48, "total": 124, "men": 76, "image": "joaquin.jpg" },
    { "name": "Carlos Russo", "women": 0, "total": 10, "men": 10 }
  ],
  "women": [
    { "name": "Nathalie Chevalier", "total": 8, "men": 8, "women": 0 },
    { "name": "Lía Mora", "total": 260, "men": 208, "women": 52, "image": "lia.jpg" },
    { "name": "Dennyse Domínguez?", "total": 26, "men": 26, "women": 0 },
    { "name": "Diana Torres", "total": 53, "men": 36, "women": 17 },
    { "name": "Annette Chabebe", "total": 25, "men": 18, "women": 7 },
    { "name": "Angie Reyes", "total": 18, "men": 17, "women": 1 },
    { "name": "Lía Pérez (AKA Gabby)", "total": 147, "men": 104, "women": 43, "image": "gabby.jpg" },
    { "name": "Ivette Guerrero", "total": 173, "men": 107, "women": 66, "image": "ivette.jpg" },
    { "name": "Charlotte Galviz", "total": 159, "men": 126, "women": 33, "image": "charlotte.jpg" },
    { "name": "Isa Díaz", "total": 13, "men": 10, "women": 3 },
    { "name": "Mariela Nouel", "total": 36, "men": 24, "women": 12 },
    { "name": "Odelis Veras", "total": 36, "men": 22, "women": 14 },
    { "name": "Daniella Lapax", "total": 72, "men": 31, "women": 41, "image": "daniella.jpg" },
    { "name": "Lisbeth Matos", "total": 17, "men": 17, "women": 0 },
    { "name": "Luz González", "total": 161, "men": 114, "women": 47, "image": "luz.jpg" }
  ]
};


const urlParams = new URLSearchParams(window.location.search);
const replacements = {
  top: urlParams.get('top'),
  source: urlParams.get('source'),
};

let resultsToUse, order;
switch (replacements.top) {
  case 'hombres':
    resultsToUse = results.men;
    break;
  case 'mujeres':
    resultsToUse = results.women;
    break;
  case 'mixto':
    resultsToUse = results.men.concat(results.women);
    break
}

switch (replacements.source) {
  case 'hombres':
    order = 'men';
    break;
  case 'mujeres':
    order = 'women';
    break;
  case 'todos':
    order = 'total';
    break
}

var winnerContainer = document.querySelector('.winners');
const template = winnerContainer.innerHTML;
let winnersHtml = '';
console.log(template);
const richardNames = ['Richard González', 'El rosado', 'El que no existe', '*No existe*', 'Richard', 'El más palomo', 'Un tiguere que no existe', 'Richal'];
resultsToUse.sort((a, b) => b[order] - a[order]).forEach((winner, i) => {
  const hue = replacements.top;
  const isWoman = hue === 'mujeres' || (hue === 'mixto' && Math.random() > 0.5);
  winnersHtml += template.replace(/\$\{(\w+)\}/g, (match, g1) => {
    switch (g1) {
      case 'name':
        const name = richardNames[Math.floor(Math.random() * 8)];
        return isWoman ? `${name} versión mujer` : name;
      case 'points':
        return winner[order] + Math.max(resultsToUse.length - i);
      case 'picture':
        return isWoman ? 'richarda.jpg' : 'richard.jpg';
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
  duration: 2000,
  easing: "easeOutExpo",
  delay: (el, i) => 100 * i
});
