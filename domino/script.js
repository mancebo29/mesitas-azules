$(document).ready(function() {
  const tbody = $('#tbody');
  const totalTr1 = $('#total1');
  const totalTr2 = $('#total2');

  let totals = [0, 0];

  const updateTotals = () => {
    if (totals[0] >= 200 || totals[1] >= 200) {
      alert('Se acabó');
    }
    totalTr1.text(totals[0]);
    totalTr2.text(totals[1]);
  }

  function removeRow() {
    if (confirm('Eliminar esta fila?')) {
      const td = $(this).parent();
      td.siblings().each((i, e) => {
        const element = $(e);
        if (element.text() !== '0') {
          let score = +element.text();
          totals[i - 1] -= score;
        }
      });
      td.parent().remove();
      updateTotals();
    }
  }

  const handleScoreInput = (score, index) => {
    if (!score) {
      return;
    }
    const row = $('<tr>');
    const td2 = $('<td class="h4">');
    const td3 = $('<td class="h4">');
    const td4 = $('<td class="h4">');
    const a = $('<a class="h4">X</a>');
    td2.text(Number(!index) && score);
    td3.text(Number(!!index) && score);
    td4.append(a);
    a.click(removeRow);
    row.append(td2, td3, td4);
    tbody.append(row);

    totals[index] += +score;
    updateTotals();
  }

  $('#score1').keyup(function (e) {
    if (e.keyCode === 13) {
      const score = $(this).val();
      handleScoreInput(score, 0);
      $(this).val('');
    }
  });

  $('#score2').keyup(function (e) {
    if (e.keyCode === 13) {
      const score = $(this).val();
      handleScoreInput(score, 1);
      $(this).val('');
    }
  });
});
