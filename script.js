// Input 0
function restrictInput(input) {
  input.value = input.value.replace(/[^0-9]/g, '').slice(0, 9);
}

function validateTAJ(a) {
  a = a.replace(/[^0-9]/g, '');
  if (9 != a.length) {
    return !1;
  }
  for (var b = 0, d = '', c = 0; c < a.length; c++) {
    7 >= c &&
      ((b += 0 == (c + 1) % 2 ? 7 * parseInt(a[c]) : 3 * parseInt(a[c])),
      (d += a[c]));
  }
  return a == d + (b % 10);
}

function checkTAJ() {
  var a = document.querySelector('#taj'),
    b = document.querySelector('#result');

  validateTAJ(a.value)
    ? ((b.textContent = 'A TAJ sz\u00e1m \u00e9rv\u00e9nyes.'),
      (b.style.color = '#4CAF50'))
    : ((b.textContent = 'A TAJ sz\u00e1m \u00e9rv\u00e9nytelen.'),
      (b.style.color = '#FF5733'));
}
