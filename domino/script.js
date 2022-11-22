$(document).ready(function() {
  const tbody = $('#tbody');
  const totalTr1 = $('#total1');
  const totalTr2 = $('#total2');

  const BONUS = 30;

  let totals = [0, 0];
  let scores = [];

  const updateTotals = () => {
    tbody.html('');
    totals = [0, 0];
    for (let i = 0; i < scores.length; i++) {
      const [score1, score2] = scores[i];
      const row = $('<tr>');
      const td2 = $('<td class="h4">');
      const td3 = $('<td class="h4">');
      const td4 = $('<td class="h4">');
      const a = $('<a class="h4">X</a>');
      td2.text(score1);
      td3.text(score2);
      td4.append(a);
      a.click(removeRow.bind(null, i));
      row.append(td2, td3, td4);
      tbody.append(row);

      totals[0] += +score1;
      totals[1] += +score2;
    }

    if (totals[0] >= 200 || totals[1] >= 200) {
      alert('Pasó');
    }
    totalTr1.text(totals[0]);
    totalTr2.text(totals[1]);
    saveGame();
  }

  function newGame() {
    scores = [];
    updateTotals();
  }

  function loadGame() {
    const previousScore = JSON.parse(localStorage.getItem('domino'));
    if (Array.isArray(previousScore) && previousScore[0] && previousScore[1]) {
      scores = previousScore;
      console.log(scores);
      updateTotals();
    }
  }

  function saveGame() {
    localStorage.setItem('domino', JSON.stringify(scores));
  }

  function giveBonus(i) {
    handleScoreInput(Number(!i) && BONUS, Number(!!i) && BONUS);
    updateTotals();
  }

  function removeRow(i) {
    if (confirm('Eliminar esta fila?')) {
      scores.splice(i, 1);
      updateTotals();
    }
  }

  const handleScoreInput = (score1, score2) => {
    if (!score1 && !score2) {
      return;
    }
    scores.push([score1, score2]);
    updateTotals();
  }

  $('#score1').keyup(function (e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      const score1 = $(this).val();
      const score2 = $('#score2').val();
      handleScoreInput(score1 || 0, score2 || 0);
      $(this).val('');
      $('#score2').val('');
    }
  });

  $('#score2').keyup(function (e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      const score2 = $(this).val();
      const score1 = $('#score1').val();
      handleScoreInput(score1 || 0, score2 || 0);
      $(this).val('');
      $('#score1').val('');
    }
  });

  $('#newGame').click(function (e) {
    if (confirm("Comenzar una nueva?")) {
      newGame();
    }
  });

  $('#selfBonus').click(function (e) {
    giveBonus(0);
  });

  $('#otherBonus').click(function (e) {
    giveBonus(1);
  });

  loadGame();
});
