var h = prompt("Informe um número hexadecimal:");

var decimal = parseInt(h, 16);
var binario = decimal.toString(2);

alert("Número Hexadecimal: " + h +
    "\nNúmero Decimal: " + decimal +
    "\nNúmero Binário: " + binario);
