const reserveCost = 1000.00;

const paymentInfo = {
  '1': 14567.20,
  '2': 11231.20,
  '3': 10341.60,
  '4': 22351.00
};

const quotesMap = {
  '6': [5, 6, 7, 8, 9, 10],
  '4': [4, 6, 8, 10],
  '3': [4, 7, 10],
  '1': [10],
};

const roomTypes = {
  '1': 'Sencilla',
  '2': 'Doble',
  '3': 'Triple',
  '4': 'Sencilla Swing Up'
}

const calculateRemainingDebt = (totalAmount, reserveCost, totalPaid) => {
  let totalDebt = totalAmount;

  if (reserveCost && reserveCost > 0) {
    totalDebt -= reserveCost;
  }

  if (totalPaid && totalPaid > 0) {
    totalDebt -= totalPaid;
  }

  return totalDebt;
}

$(document).ready(function() {
  const dataContainer = document.querySelector('.data');
  const select = $('#nameSelector');
  let dataHtml = '';
  const formatter = new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency: 'DOP',
  });

  select.innerHTML = '';
  const defaultOption = document.createElement('option');
  select.append(defaultOption);
  window.resort.sort((a, b) => { return (a.name < b.name) * -1 }).forEach(p => {
    const option = document.createElement('option');
    option.value = p.name;
    option.innerHTML = p.name;
    select.append(option);
  });

  select.select2({
    placeholder: 'Pon tu nombre',
    width: '100%',
    selectionCssClass: 'selector',
  });

  const getMonthName = (num) => {
    const date = new Date(2022, 1, 1);
    date.setMonth(num - 1);
    const options = { month: 'long' };
    return date.toLocaleDateString('es-ES', options);
  }

  const template = `
        <div class="title">
          <h1 id="name">@{name}</h1>
        </div>
        <div class="data-points">
          <div class="entry">
            <label>Tipo de habitación</label>
            <span>@{roomType}</span>
          </div>
          <div class="entry">
            <label></label>
            <span>@{roomates}</span>
          </div>
          <div class="entry">
            <label>Plan de pago elegido</label>
            <span>@{paymentInfo}</span>
          </div>
          <div class="entry">
            <label>Monto total</label>
            <span class="amount">@{totalAmount}</span>
          </div>
          <div class="entry">
            <label>Total abonado</label>
            <span class="amount">@{totalPaid}</span>
          </div>
          <div class="entry">
            @{pendingPayment}
          </div>
          <div class="entry">
            <label>@{quotesCount}</label>
          </div>
          <div class="entry">
            @{pendingAmount}
          </div>
        </div>
        <div class="accountInfo">
          <p>BHD LEON</p>
          <p>Nombre: Romer Diaz</p>
          <div class="inline">
            <span>Cta de ahorro: 30195400016</span><button data-copy="30195400016" class="btn btn-1">Copiar</button>
          </div>
          <div class="inline">
            <span>ID: 402-2401-371-0</span><button data-copy="40224013710" class="btn btn-2">Copiar</button>
          </div>
        </div>
  `;

  select.change((e) => {
    const person = window.resort.find(p => p.name === e.target.value);
    if (!person) {
      console.log('Error');
    }

    console.log(person);

    const nextMonth = quotesMap[person.paymentType].find(x => x >= new Date().getMonth() + 1);
    const room = window.rooms[person.roomId];

    const roommates = window.resort.filter(p => p.roomId === person.roomId && p.name !== person.name).map(p => p.name);

    const missingMonths = person.pendingPayments.filter(x => quotesMap[person.paymentType].includes(x));
    dataHtml = template.replace(/@\{(\w+)\}/g, (match, g1) => {
      switch (g1) {
        case 'name':
          return person.name;
        case 'paymentInfo':
          return `${person.paymentType} cuotas`;
        case 'roomType':
          return roomTypes[room.type];
        case 'totalAmount':
          return formatter.format(paymentInfo[person.roomType]);
        case 'totalPaid':
          return formatter.format(person.totalPaid);
        case 'pendingPayment':
          return missingMonths.length
            ? `<label>Tienes hasta <span>${getMonthName(nextMonth)}</span> para pagar una cuota de: </label>
               <span class="amount">${formatter.format(calculateRemainingDebt(paymentInfo[person.roomType], reserveCost)/ person.paymentType)}</span>`
            : `Ya pagaste todo. Felicidades!. `;
        case 'quotesCount':
          return missingMonths.length
            ? `Después de ahí te faltarían ${missingMonths.length} cuotas: ${missingMonths.map(m => getMonthName(m)).join(', ')}.`
            : 'Nos vemos en el resort :D';
        case 'roomates':
          return roommates.length
            ? `Junto con ${roommates.join(', ')}`
            : ''
        case 'pendingAmount':
          let totalDebt = calculateRemainingDebt(paymentInfo[person.roomType], null, person.totalPaid);

          return totalDebt > 0
            ? `<label> Puedes terminar de pagar todo, abonando </label><span class="amount">${formatter.format(totalDebt)}</span>`
            : totalDebt < 0
              ? `<label> Barbaro te pasaste, en octubre veremos para pagarte lo siguiente: </label><span class="amount">${formatter.format(totalDebt)}</span>`
              : '';
      }
    });

    dataContainer.innerHTML = dataHtml;
    $('.btn').click((e) => {
      console.log('clicked')
      navigator.clipboard.writeText($(e.target).data('copy')).then(() => alert('copiado')).catch(() => alert('no se puede xD'));
    });
  });
});
