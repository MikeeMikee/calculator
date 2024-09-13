function calculate() {
  const Percent_1 = parseFloat(document.getElementById('Percent_1').value);
  const Price_1 = parseFloat(document.getElementById('Price_1').value);


  const ExitVolume_1 = Price_1 / Percent_1;


  document.getElementById('ExitVolume_1').innerText = ExitVolume_1.toFixed(4);
}

// Запуск функции calculate() при изменении значений в полях ввода
document.getElementById('Percent_1').addEventListener('input', calculate);
document.getElementById('Price_1').addEventListener('input', calculate);