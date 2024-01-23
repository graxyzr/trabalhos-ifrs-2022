// Exercício OBI 2020 - Fase 1 - Relógio de Atleta (Nível Júnior)
var r, f, c;

r = Number(prompt("Insira a frequência cardíaca em repouso do atleta:"));
f = Number(prompt("Insira a frequência cardíaca atual do atleta:"));
c = Number(prompt("Insira a capacidade de oxigenação atual do atleta:"));

if (f > 3 * r || c < 95) {
    alert("diminuir");
}

else if (f < 2 * r && c > 97) {
    alert("aumentar");
}

else {
    alert("manter");
}



// Exercício OBI 2020 - Fase 1 - Camisetas da Olímpiada (Nível Júnior)
var N, T, P, M, c, P1, M2;

P = 0;
M = 0;

N = Number(prompt("Insira o número de premiados:"));

for (c = 1; c <= N; c++) {
    T = Number(prompt("Insira os tamanhos solicitados"));

    if (T == 1) {
        P++;
    }
    else if (T == 2) {
        M++;
    }
}

P1 = Number(prompt("Camisetas de Tamanho P:"));
M2 = Number(prompt("Camisetas de Tamanho M:"));

if (M2 >= M && P1 >= P) {
    alert("S");
}

else {
    alert("N");
}



// Exercício OBI 2020 - Fase 1 - Piloto Automático (Nível Júnior)
var a, b, c, i;

a = Number(prompt("Insira a posição atual da traseira do carro A: "));
b = Number(prompt("Insira a posição atual da traseira do carro B: "));
c = Number(prompt("Insira a posição atual da traseira do carro C: "));

if ((b - a) < (c - b)) {
    alert("O carro B precisa ser acelerado! (1)");
}

if ((b - a) > (c - b)) {
    alert("O carro B precisa ser desacelerado! (-1)");
}

if ((b - a) == (c - b)) {
    alert("O carro B precisa manter a velocidade! (0)");
}



// Exercício OBI 2021 - Fase 1 - Plano de Internet (Nível Júnior)
var vqm, m, mu, r, c;

vqm = Number(prompt("Insira o valor da quota mensal em megabytes:"));
m = Number(prompt("Insira o número de meses:"));
r = vqm;

for (c = 1; c <= m; c++) {
    mu = Number(prompt("Insira a quantidade utilizada no mês " + c + ":"));
    r = vqm + (r - mu);
}

console.log("Cota Restante: " + r);



// Exercício OBI 2008 - Fase 1 - Telefone (Nível 1)
var t;

t = prompt("Insira o número de telefone:");
t = t.replaceAll(" ", "");
t = t.toUpperCase();

if (t.length < 1 || t.length > 15 || t.indexOf("Z") != -1) {
    alert("O número inserido é inválido!");
}

else {
    t = t.replaceAll("A", "2");
    t = t.replaceAll("B", "2");
    t = t.replaceAll("C", "2");
    t = t.replaceAll("D", "3");
    t = t.replaceAll("E", "3");
    t = t.replaceAll("F", "3");
    t = t.replaceAll("G", "4");
    t = t.replaceAll("H", "4");
    t = t.replaceAll("I", "4");
    t = t.replaceAll("J", "5");
    t = t.replaceAll("K", "5");
    t = t.replaceAll("L", "5");
    t = t.replaceAll("M", "6");
    t = t.replaceAll("N", "6");
    t = t.replaceAll("O", "6");
    t = t.replaceAll("P", "7");
    t = t.replaceAll("Q", "7");
    t = t.replaceAll("R", "7");
    t = t.replaceAll("S", "7");
    t = t.replaceAll("T", "8");
    t = t.replaceAll("U", "8");
    t = t.replaceAll("V", "8");
    t = t.replaceAll("W", "9");
    t = t.replaceAll("X", "9");
    t = t.replaceAll("Y", "9");
    t = t.replaceAll("Z", "9");

    console.log(t);
}



// Exercício OBI 2014 - Fase 2 - Decifra (Nível 1)
var alfabeto, cript, text, final = "";
alfabeto = "abcdefghijklmnopqrstuvwxyz";

cript = prompt("Insira o alfabeto criptografado:");
text = prompt("Insira o texto criptografado:");

for (c = 0; c < text.length; c++) {
    final += alfabeto.charAt(cript.indexOf(text.charAt(c)));
}

alert(final);



// Exercício OBI 2016 - Fase 1 - Plantação de Morangos (Nível Júnior)
var c1, c2, l1, l2, area1, area2;

c1 = Number(prompt("Insira o comprimento do primeiro local: "));
l1 = Number(prompt("Insira a largura do primeiro local: "));
c2 = Number(prompt("Insira o comprimento do segundo local: "));
l2 = Number(prompt("Insira a largura do segundo local: "));

area1 = (c1 * l1);
area2 = (c2 * l2);

if (area1 >= area2) {
    alert("A área do primeiro local é: " + area1 + "\n Do segundo terreno é: " + area2 + "\n Então, o terreno com maior área é o primeiro!");
}

else if (area2 => area1) {
    alert("A área do primeiro local é: " + area1 + "\n Do segundo terreno é: " + area2 + "\n Então, o terreno com maior área é o segundo!");
}



// Exercício OBI 2015 - Fase 1 - Móbile (Nível Júnior)
var a, b, c, d;

a = Number(prompt("Insira o peso da primeira bola: "));
b = Number(prompt("Insira o peso da segunda bola: "));
c = Number(prompt("Insira o peso da terceira bola: "));
d = Number(prompt("Insira o peso da quarta bola: "));

if (a == b + c + d && b + c == d && b == c) {
    alert("S");
}

else {
    alert("N");
}