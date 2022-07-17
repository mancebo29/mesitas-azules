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
            <label>Tienes hasta <span>@{month}</span> para pagar: </label>
            <span class="amount">@{pendingAmount}</span>
          </div>
          <div class="entry">
            <label>Después de ahí @{quotesCount} @{missingMonths}</label>
          </div>
        </div>
        <div class="accountInfo">
          <p>BHD LEON</p>
          <p>Nombre: Romer Diaz</p>
          <div class="inline">
            <span>Cta de ahorro: 30195400016</span><button class="btn btn-1">Copiar</button>
          </div>
          <div class="inline">
            <span>ID: 402-2401-371-0</span><button class="btn btn-2">Copiar</button>
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

    const roomates = window.resort.filter(p => p.roomId === person.roomId && p.name !== person.name).map(p => p.name);

    const missingMonths = person.pendingPayments.filter(x => quotesMap[person.paymentType].includes(x));
    dataHtml = template.replace(/@\{(\w+)\}/g, (match, g1) => {
      switch (g1) {
        case 'name':
          return person.name;
        case 'paymentInfo':
          return `${person.paymentType} cuotas`;
        case 'roomType':
          return roomTypes[room.type];
        case 'month':
          return getMonthName(nextMonth);
        case 'pendingAmount':
          return formatter.format((paymentInfo[person.roomType] - reserveCost)/ person.paymentType);
        case 'quotesCount':
          return missingMonths.length ? `te faltarían ${missingMonths.length} cuotas: ` : 'ya.';
        case 'missingMonths':
          return missingMonths.length ? 'A pagar en ' + missingMonths.map(m => getMonthName(m)).join(', ') : '';
        case 'roomates':
          return roomates.length ? `Junto con ${roomates.join(', ')}` : '';
      }
    });

    dataContainer.innerHTML = dataHtml;
    $('.btn-1').click(() => {
      console.log('clicked')
      navigator.clipboard.writeText('30195400016').then(() => alert('copiado')).catch(() => alert('no se puede xD'));
    });
    $('.btn-2').click(() => {
      console.log('clicked')
      navigator.clipboard.writeText('40224013710').then(() => alert('copiado')).catch(() => alert('no se puede xD'));
    });
  });
});
