function validateTAJ(taj) {
  taj = taj.replace(/[^0-9]/g, '');

  if (taj.length != 9) {
    return false;
  }

  let sum = 0;
  let num = '';

  for (let i = 0; i < taj.length; i++) {
    if (i < 8) {
      sum += (i + 1) % 2 == 0 ? parseInt(taj[i]) * 7 : parseInt(taj[i]) * 3;
      num += taj[i];
    }
  }

  num += sum % 10;
  return taj == num;
}

function checkTAJ() {
  const tajInput = document.querySelector('#taj');
  const resultElement = document.querySelector('#result');
  const taj = tajInput.value;

  if (validateTAJ(taj)) {
    resultElement.textContent = 'A TAJ szám érvényes.';
    resultElement.style.color = '#4CAF50';
  } else {
    resultElement.textContent = 'A TAJ szám érvénytelen.';
    resultElement.style.color = '#FF5733';
  }
}
