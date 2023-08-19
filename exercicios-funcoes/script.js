// Lista de Exercícios 6 (Funções) - Greice Pereira 1C1

// 1 - Elaborar um programa que leia o nome completo de um aluno. O programa deve validar o preenchimento de um nome completo e exibir a senha inicial do aluno, a qual será o sobrenome seguido pelo número de vogais do nome completo dele. O programa deve conter as funções:
// - validarNome() - que receba um nome como parâmetro e retorne true (nome completo) ou false (nome incompleto);
// - obterSobrenome() - que receba um nome como parâmetro e retorne o último nome do aluno em letras minúsculas;
// - contarVogais() - que receba um nome e retorne o número de vogais deste, com dois dígitos;

var nome, t, qtdv = 0, c = 0;

function validarNome(nome) { //// FUNÇÃO PARA VALIDAR NOME

    if (nome.indexOf(" ") != -1) {

        if (nome.substring(c + 1, c + 3) != " ") {

            return true;

        }

    }

    else {

        return false;

    }

}

function obterSobrenome(nome) { //// FUNÇÃO PARA OBTER SOBRENOME

    var t = nome.split(" ").length;
    var nome = nome.split(" ")[t - 1];

    return nome.toLowerCase();

}

function contarVogais(nome) { //// FUNÇÃO PARA CONTAR AS VOGAIS

    for (c = 0; c < nome.length; c++) {

        if (nome.charAt(c) == "a" || nome.charAt(c) == "e" || nome.charAt(c) == "i" || nome.charAt(c) == "o" || nome.charAt(c) == "u" || nome.charAt(c) == "A" || nome.charAt(c) == "E" || nome.charAt(c) == "I" || nome.charAt(c) == "O" || nome.charAt(c) == "U") {

            qtdv++;

        }

    }
    return qtdv++;

}

nome = prompt("Informe o seu nome:");

if (validarNome(nome) == true) {

    if (qtdv < 10) {

        alert("A sua senha: " + obterSobrenome(nome) + "0" + contarVogais(nome));

    }

    if (qtdv > 10) {

        alert("A sua senha: " + obterSobrenome(nome) + contarVogais(nome));

    }

}

if (validarNome(nome) == false) {

    alert("Você inseriu algo errado.");

}




// 2 - Elaborar um programa para uma clínica veterinária, que leia o preço de uma vacina e se o cliente possui ou não convênio. Caso possua algum convênio exibir as opções "1-Amigo dos Animais" e "2-Saúde Animal". O programa deve exibir o valor do desconto (10% sem convênio;     20% para "Amigo dos Animais"; 50% para Saúde Animal") e o valor a ser pago. Criar a função: - calcularDesconto() - que recebe como parâmetro valor e taxa de desconto. Retornar o valor do desconto.

function calcularDesconto(valor, taxa) {

    if (taxa == "1") {        //// NÃO TEM CONVÊNIO

        vd = valor - valor * 10 / 100;
        valordesc = valor * 10 / 100;
        console.log("O valor da vacina com desconto é R$" + vd + "\nO valor do desconto é R$" + valordesc);
        return vd;

    }

    if (taxa == "2") {        //// CONVÊNIO PARA 'Amigo dos Animais'

        vd = valor - valor * 20 / 100;
        valordesc = valor * 20 / 100;
        console.log("O valor da vacina com desconto é R$" + vd + "\nO valor do desconto é R$" + valordesc);
        return vd;

    }

    if (taxa == "3") {       //// CONVÊNIO PARA 'Saúde Animal'

        vd = valor - valor * 50 / 100;
        valordesc = valor * 50 / 100;
        console.log("O valor da vacina com desconto é R$" + vd + "\nO valor do desconto é R$" + valordesc);
        return vd;

    }
}

v = Number(prompt("Informe o preço da vacina:"));
t = prompt("Você possui convênio? \n( 1 ) - Não \n( 2 ) - Convênio para 'Amigo dos Animais' \n( 3 ) - Convênio para 'Saúde Animal'");

var valorDesconto = calcularDesconto(v, t);




// 3 - Elaborar um programa que leia o nome e a idade de um atleta de um clube de natação. O programa deve exibir o nome com "-" abaixo das letras do nome e a categoria do atleta, que pode ser "Infantil" (até 12 anos), "Juvenil" (entre 13 e 18 anos) ou "Adulto" (acima de 18 anos). O programa deve conter as funções:
// - retornarTracos() - que receba um nome como parâmetro e retorne uma linha com "-" para as letras do nome (nos espaços, manter os espaços).
// - categorizarAluno() - que receba um número como parâmetro e retorne a categoria do aluno.

function retornarTracos(nome) {

    tracos = nome;
    for (c = 0; c < tracos.length; c++) {

        tracos = tracos.replaceAll(tracos.charAt(c), "-");

    }

    return tracos;

}

function categorizarAluno(numero) {

    if (numero <= 12) {

        return "Infantil";

    }

    if (numero > 12 && numero < 18) {

        return "Juvenil";

    }

    if (numero >= 18) {

        return "Adulto";

    }

}

n = prompt("Informe o seu nome:");
i = Number(prompt("Informe a sua idade:"));

var nomecomTracos = retornarTracos(n);
var alunoCategorizado = categorizarAluno(i);

console.log(n + "\n" + nomecomTracos + "\n" + alunoCategorizado);



// 4 - Precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, DANO e SAUDE. A função deve retornar verdadeiro se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e falso caso contrário.

var dano = 0, saude = 0;

function analisarPerso(dano, saude) {

    if (dano >= saude) {

        return true;

    }

    if (dano < saude) {

        return false;

    }


}

var finalAnalisar = analisarPerso(dano, saude);

dano = Number(prompt("Informe o dano:"));
saude = Number(prompt("Informe a saúde:"));

if (analisarPerso(dano, saude) == true) {

    console.log("O dano matou o personagem!");

}

if (analisarPerso(dano, saude) == false) {

    console.log("O dano NÃO MATOU o personagem!");

}




// 5 -Temos um vetor de 5 posições, com o nome de 5 itens que nosso herói carrega na mochila. Quando o personagem chega numa porta, queremos detectar automaticamente se ele tem ou não uma chave para deixá-lo passar. Crie uma função temChave que percorre o vetor comparando se cada item tem o nome “chave” e retorne verdadeiro se encontrar alguma. Caso contrário, a função deve retornar falso.

var itens = [];

function temChave(itens) {

    if (itens.indexOf("chave") != -1) {

        return true;

    }

    else {

        return false;

    }


}

for (c = 0; c < 5; c++) {

    itens = prompt("Informe o nome de um item:");

}

var finaltemChave = temChave(itens);

if (temChave(itens) == true) {

    alert("Possui uma chave!");

}

if (temChave(itens) == false) {

    alert("NÃO POSSUI CHAVE!");

}