let x1;
let x2;
alert("Розрахунок квадратного рівняння типу ax*x + bx + c = 0");
const a = parseInt(prompt('Будь ласка введіть а:'));
if (isNaN(a)) {
  alert(
    'Помилка!!! Перезавантажте сторінку і спробуйте ще раз.');
}
else if (a === 0) {
  alert(
    'a не може дорівнювати 0! Якщо a = 0, тоді рівняння буде лінійним, а не квадратичним рівнянням.');
}
else {
  const b = parseInt(prompt('Будь ласка введіть b:'));
  const c = parseInt(prompt('Будь ласка введіть c:'));
  if (b && c) {
    const D = calcD(a, b, c);
    solve(D, a, b);
  }
}

function calcD(a, b, c) {
  return (b * b) - (4 * a * c);
}

function solve(descr, a, b) {
  if (descr > 0) {
    x1 = ((b * -1) - Math.sqrt(descr)) / (2 * a);
    x2 = ((b * -1) + Math.sqrt(descr)) / (2 * a);
    alert('x дорівнює:' + x1 + ' або ' + x2);
  }
  else if (descr === 0) {
    x1 = -(b / 2 * a);
    alert('x дорівнює:' + x1);
  }
  else {
    alert(
      'Дискримінант менший за нуль і дане рівняння не має дійсних коренів.');
  }
}
