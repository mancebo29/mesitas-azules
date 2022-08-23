
var textWrapper = document.querySelector('.ml6 .letters');
var description = document.querySelector('#description');
const dateOfEvent = new Date(2022, 9, 8);
const currentDate = new Date();
const days = Math.ceil((dateOfEvent - currentDate) / (1000*60*60*24));

document.title = `${days} Días para que Davmi se vaya :c`;
description.setAttribute('content', `Faltan ${days} Días y contando`);
if (days > 0) {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\$\{(\w+)\}/g, days.toString());
  if (days === 1) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/s/g, '');
  }
} else {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\$\{(\w+)\}/g, 'Qué es lo que tú haces viendo esto todavía?');
}
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 2000,
    delay: (el, i) => 200 * i
  });
