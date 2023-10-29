// Input 0
function restrictInput(a) {
  a.value = a.value.replace(/[^0-9]/g, "").slice(0, 9);
}
function validateTAJ(a) {
  a = a.replace(/[^0-9]/g, "");
  if (9 != a.length) {
    return !1;
  }
  for (var c = 0, d = "", b = 0; b < a.length; b++) {
    7 >= b && (c += 0 == (b + 1) % 2 ? 7 * parseInt(a[b]) : 3 * parseInt(a[b]), d += a[b]);
  }
  return a == d + c % 10;
}
function checkTAJ() {
  event.preventDefault();
  var a = document.querySelector("#taj"), c = document.querySelector("#result");
  a = validateTAJ(a.value);
  c.textContent = a ? "A TAJ sz\u00e1m \u00e9rv\u00e9nyes." : "A TAJ sz\u00e1m \u00e9rv\u00e9nytelen.";
  c.style.color = a ? "#4CAF50" : "#FF5733";
  return a;
}
;