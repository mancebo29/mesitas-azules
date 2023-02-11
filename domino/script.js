$(document).ready(function() {
  const tbody = $('#tbody');
  const totalTr1 = $('#total1');
  const totalTr2 = $('#total2');
  const DEFAULT_SETTINGS = {
    bonus: 30,
    name1: 'Nosotros',
    name2: 'Ellos',
    limit: 200,
  };

  let settings = DEFAULT_SETTINGS;

  let totals = [0, 0];
  let scores = [];

  const updateTotals = () => {
    const limit = settings.limit;
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

    if (totals[0] >= limit || totals[1] >= limit) {
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
    loadSettings();
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
    const bonus = settings.bonus;
    handleScoreInput(Number(!i) && bonus, Number(!!i) && bonus);
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

  const closeSettings = () => {
    $('#main').removeClass('d-none');
    $('#settings').addClass('d-none');
  }

  const updateSettings = () => {
    $('#selfBonus').text(settings.bonus);
    $('#otherBonus').text(settings.bonus);
    $('#nameDisplay1').text(settings.name1);
    $('#nameDisplay2').text(settings.name2);
  }

  const saveSettings = () => {
    localStorage.setItem('domino-settings', JSON.stringify(settings));
    updateSettings();
  }

  const loadSettings = () => {
    settings = JSON.parse(localStorage.getItem('domino-settings'));
    updateSettings();
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

  $('#settingsBtn').click(function(e) {
    $('#main').addClass('d-none');
    $('#settings').removeClass('d-none');

    $('#team1').val(settings.name1);
    $('#team2').val(settings.name2);
    $('#limit').val(settings.limit);
    $('#bonus').val(settings.bonus);
  });

  $('#cancel').click(function() {
    closeSettings();
  });

  $('#defaults').click(function() {
    if (confirm('Usar la configuración por defecto')) {
      settings = DEFAULT_SETTINGS;
      saveSettings();
      closeSettings();
    }
  });

  $('#save').click(function() {
    const name1 = $('#team1').val() || DEFAULT_SETTINGS.name1;
    const name2 = $('#team2').val() || DEFAULT_SETTINGS.name2;
    const limit = $('#limit').val() || DEFAULT_SETTINGS.limit;
    const bonus = $('#bonus').val() || DEFAULT_SETTINGS.bonus;

    settings = {
      name1,
      name2,
      limit,
      bonus,
    }

    saveSettings();
    closeSettings();
  });

  loadGame();
});
