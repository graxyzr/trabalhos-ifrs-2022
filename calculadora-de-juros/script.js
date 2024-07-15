// Trabalho de Programação c/ Matemática - Greice Pereira 1C1
function calculaJuros(capital, taxaJuros, tempoAplicado) {
	var taxaJuros = taxaJuros / 100;
	var montante = capital * Math.pow((1 + taxaJuros), tempoAplicado);
	var total = montante.toFixed(2);
	var totalm = total / tempoAplicado;
	totalm = totalm.toFixed(2);
	return "Total: R$" + total + "\nMensalmente: R$" + totalm;
}
var c = Number(prompt("Insira o valor da capital:"));
var tJ = Number(prompt("Insira o valor da taxa:"));
var t = Number(prompt("Insira o tempo de aplicação:"));
console.log(calculaJuros(c, tJ, t));
