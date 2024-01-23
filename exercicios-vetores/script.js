// Lista de Exercícios 5 (Vetores) - Greice Pereira 1C1

// 1. Leia uma sequência de N números inteiros e mostre essa sequência ao contrário, no final de sua execução. O valor de N deve ser informado pelo usuário.
var n, v, c;
v = [];

n = Number(prompt("Informe o valor do N:"));

for (c = 1 ; c <= n ; c++) {
    v[c] = Number(prompt("Informe um número inteiro:"));
}

alert(v.reverse());




// 1. SEM REVERSE - Leia uma sequência de N números inteiros e mostre essa sequência ao contrário, no final de sua execução. O valor de N deve ser informado pelo usuário.
var n, v, c;
v = [];

n = Number(prompt("Informe o valor do N:"));

for (c = 0 ; c <= n ; c++) {
    v[c] = prompt("Informe um número inteiro:");
}

for (c = v.length - 1 ; c >= 0 ; c--) {
    console.log(v[c]);
}                                                     




// 2. Leia a pontuação de N times de um campeonato de futebol. O programa deve mostrar, ao final, qual a pontuação dos campeões, bem como mostrar quantos times dividiram o título.
var n, c, p, v;
v = 0;
p = [];
x = 0;

n = Number(prompt("Informe o número de times:"));

for (c = 0 ; c < n ; c++) {
    p[c] = prompt("Informe a pontuação:");

    if (p[c] > v) {
        v = p[c];
    }
}

for (c = 0 ; c < n ; c++) {
    if (p[c] == v) {
        x++;
    }
}

console.log(x);




// 3. Peça ao usuário 10 números, calcule e mostre a média desses 10 números e mostre ainda quantos, desses números, são maiores que a média.
var v, i, c, total, soma, media;
v = [];
total = 0;

for (c = 1 ; c <= 10 ; c++) {
    v[c] = Number(prompt("Insira um número:"));
}

    soma = v[1] + v[2] + v[3] + v[4] + v[5] + v[6] + v[7] + v[8] + v[9] + v[10];
    media = soma/10;

for (i = 0 ; i < v.length ; i++) {
    if (v[i] > media) {
        total += 1;
    }
}

console.log("A sua soma é " + soma + "\nSua média: " + media + "\nO total de números maiores que a média são: " + total);




// 4. Leia um vetor com dez números reais, calcule e mostre a quantidade de números negativos e a soma dos números positivos desse vetor.
var v, c, negativo = 0, positivo = 0, valor;
v = [];

for (c = 1 ; c <= 10 ; c++) {
    v[c] = Number(prompt("Informe um número:"));
    valor = v[c];

    if (valor > 0) {
        positivo += valor;
    }

    else {
        negativo += 1;
    }
}
    console.log("Quantidade de números negativos: " + negativo + "\nSoma de números positivos: " + positivo);




// 5. Leia um vetor com 15 posições, calcule e mostre:
// a) O maior elemento do vetor e em que posição esse elemento se encontra;
// b) O menor elemento do vetor e em que posição esse elemento se encontra;
var v, c, maior, menor, posMaior, posMenor;
v = [];

for (c = 0 ; c < 15 ; c++) {
    v[c] = Number(prompt("Informe um elemento:"));
}

    maior = v[0];
    posMaior = 0;

    for (c = 1 ; c < 15 ; c++) {
        if (v[c] > maior) {
            maior = v[c];
            posMaior = c
        }
    }

    menor = v[0];
    posMenor = 0;

    for (c = 1 ; c < 15 ; c++) {
        if (v[c] < menor) {
            menor = v[c];
            posMenor = c;
        }
    }

    console.log("Maior: " + maior + "\nPosição: " + posMaior);
    console.log("Menor: " + menor + "\nPosição: " + posMenor);  




// 6. Leia 2 vetores de 10 posições e some os elementos de mesma posição e armazene o resultado em um terceiro vetor (também de 10 posições).
var v1, v2, v3, c;
v1 = [];
v2 = [];
v3 = [];

for (c = 0 ; c < 10 ; c++) {
    v1[c] = Number(prompt("Informe os seus dez números:"));
    v2[c] = Number(prompt("Informe os seus dez números:"));
    v3[c] = v1[c] + v2[c];
}

console.log(v3);  




// 7. Leia um vetor de 20 posições e uma variável A. A seguir, armazene em um outro vetor o produto da variável A pelo primeiro vetor.
var v, c, va, v1;
v1 = [];
v = [];

va = Number(prompt("Informe um valor para A:"));

for (c = 0 ; c < 20 ; c++) {
    v[c] = Number(prompt("Informe um elemento:"));
    v1[c] = v[c] *= va;
}

console.log(v1);  




// 8. Um time de basquete possui 12 jogadores. Elabore um programa que leia dois vetores NOME e ALTURA, calcule e imprima o nome do jogador mais alto e a sua altura.
var v = 0, c, nome, altura, x = 0;
nome = [];
altura = [];

for (c = 0 ; c < 12 ; c++) {
    nome[c] = prompt("Informe o nome:");
    altura[c] = Number(prompt("Informe a altura:"));

    if ( altura[c] > v ) {
        v = altura[c];
    }
        x = altura.indexOf(v);
}

console.log("Jogador mais alto: " + nome[x] + "\nSua altura: " + v);




// 9. Dados três vetores reais de 5 posições, leia estes vetores (usando uma estrutura de repetição), calcule a expressão ((vetor1 * vetor3) / vetor2 ), utilizando os valores da mesma posição, armazenando em um quarto vetor, também de números reais de 5 posições. No final, imprima os números do quarto vetor.
var v1, v2, v3, v4, c;
v1 = [];
v2 = [];
v3 = [];
v4 = [];

for (c = 0 ; c < 5 ; c++) {
    v1[c] = Number(prompt("Informe um valor:"));
}

for (c = 0 ; c < 5 ; c++) {
    v2[c] = Number(prompt("Informe um valor:"));
}

for (c = 0 ; c < 5 ; c++) {
    v3[c] = Number(prompt("Informe um valor:"));
}

for (c = 0 ; c < 5 ; c++) {
    v4[c] = ( v1[c] * v3[c] ) / v2[c];
}

    console.log(v4); 



 
// 10. Leia um conjunto de 30 valores e os coloque em 2 vetores conforme estes valores forem pares ou ímpares. O tamanho dos vetores é de 15 posições. Se algum vetor estiver cheio, escrever uma mensagem informando que o vetor já está cheio. Terminada a leitura, escrever o conteúdo dos dois vetores.
var conjunto, v1, v2, c;
v1 = [];
v2 = [];
conjunto = [];

for (c = 0 ; c < 30 ; c++) {
    conjunto[c] = Number(prompt("Informe um valor:"));
    if (conjunto[c] % 2 == 0 && v2.length < 15) {
        v2.push(conjunto[c]);
        console.log("Pares: " + v2);
    }

    else if (conjunto[c] % 2 != 0 && v1.length < 15) {
        v1.push(conjunto[c]);
        console.log("Ímpares: " + v1);
    }

    else {
        alert("O vetor está cheio!");
        c -= 1;
    }
}       




// 11. Leia um vetor de 20 posições e mostre- o. Em seguida, troque o primeiro elemento com o último, o segundo com o penúltimo, o terceiro com o antepenúltimo, e assim sucessivamente. Mostre o novo vetor depois da troca.
var v, c;
v = [];

for (c = 0 ; c < 20 ; c++) {
    v[c] = Number(prompt("Informe um número: " + "("+ (c + 1) + ")"));
}

console.log(v.reverse());                         




// 12. Leia um vetor A de 6 elementos contendo o gabarito da Mega Sena. A seguir, leia um vetor B de 10 elementos contendo uma aposta. Escreva quantos pontos fez o apostador, e se ele fez a sena (6 acertos), a quina (5 acertos) ou a quadra (4 acertos).
var correto, valora, valorb, i, c, oc;

correto = 0;
valorb = [];
valora = [12, 32, 78, 23, 89, 98];

for (c = 1 ; c <= 10 ; c++) {
    valorb[c] = Number(prompt("Informe um número: \n\n[ 4 Acertos ] - Você realiza QUADRA!\n\n[ 5 Acertos ] - Você realiza QUINA!\n\n[ 6 Acertos ] - Você realiza SENA!"));
}

for (i = 0 ; i <= 6 ; i++) {
    for (oc = 0 ; oc <= 10 ; oc++) {
        if (valora[i] == valorb[oc]) {
            correto += 1;
        }
    }
}
    if (correto == 4) {
        alert("VOCÊ FEZ UMA QUADRA, PARABÉNS!");
    }

    if (correto == 5) {
        alert("VOCÊ FEZ UMA QUINA, PARABÉNS!");
    }

    if (correto == 6) {
        alert("VOCÊ FEZ UMA SENA, PARABÉNS!");
    }

    if (correto < 4) {
        alert("Você fez " + correto + " acerto(s)\n\nMelhore na próxima!");
    }                                                                           
