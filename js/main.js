function convert() {
  var fromUnit = document.getElementById('inputTemp').value;
  var toUnit = document.getElementById('hasilTemp').value;
  var temperature = parseFloat(document.getElementById('temperature').value);

  var converttedValue;
  var resultUnit;

  switch (fromUnit) {
    case 'C':
      if (toUnit === 'F') {
        convertedValue = (temperature * 9) / 5 + 32;
        resultUnit = 'F';
      } else {
        convertedValue = temperature;
        resultUnit = 'C';
      }
      break;

    case 'F':
      if (toUnit === 'C') {
        convertedValue = ((temperature - 32) * 5) / 9;
        resultUnit = 'C';
      } else {
        convertedValue = temperature;
        resultUnit = 'F';
      }
      break;
  }

  document.getElementById('result').value =
    convertedValue.toFixed(2) + ' ' + resultUnit;
}
