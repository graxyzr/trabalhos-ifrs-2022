// Teste de MBTI - Projeto Final - Greice Braga & Rafael Santos

// FUNCTION - CALCULA RESULTADO FINAL

function verificaFinal (pontodiplomata, pontoanalista, pontoexplorador, pontosentinela) {

    resp = Math.max(pontodiplomata, pontoanalista, pontoexplorador, pontosentinela);
    if (resp == pontodiplomata) {
        alert("Com " + resp + " sua personalidade é o Diplomata. Clique abaixo para descobrir um pouco a mais sobre ele.");
    }
    if (resp == pontoanalista) {
        alert("Com " + resp + " sua personalidade é o Analista. Clique abaixo para descobrir um pouco a mais sobre ele.");
    }
    if (resp == pontoexplorador) {
        alert("Com " + resp + " sua personalidade é o Explorador. Clique abaixo para descobrir um pouco a mais sobre ele.");
    }
    if (resp == pontosentinela) {
        alert("Com " + resp + " sua personalidade é o Sentinela. Clique abaixo para descobrir um pouco mais sobre ele.");
    }

}

///////////////////////////////////////////////////////////////////////////////////////

var pontodiplomata = 0, pontoanalista = 0, pontoexplorador = 0, pontosentinela = 0, pergunta, nome, duvida;

// INTRODUÇÃO

alert("Bem vindo(a) ao Teste de MBTIs!");

nome = prompt("Informe seu nome abaixo:");

alert("Olá " + nome + ", iremos explicar como funciona!" + "\nO Teste de MBTIs será categorizado conforme a sua classe, de acordo com as respostas inseridas.");
duvida = prompt("Ficou com alguma dúvida? Podemos explicar mais especificamente. \n\n1️⃣ - Sim \n2️⃣ - Não");

if (duvida == "1") {
    alert("O MBTI é um teste de personalidade feito por meio de respostas a um questionário. O indicador é usado em empresas, aconselhamento de carreiras, pedagogia e treinos de liderança, por exemplo.");
    alert("Podemos categorizá-las em: \n\n- Diplomatas \n- Analistas \n- Exploradores \n- Sentinelas");
}

///////////////////////////////////////////////////////////////////////////////////////

// INÍCIO DO TESTE - PERGUNTAS

if (prompt("Você se considera uma pessoa divertida? \n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoexplorador += 5;
}
else {
    pontosentinela += 5;
}

if (prompt("Você perdoaria uma traição? \nIndependentemente da área (Amizade, Romanticamente...) \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontodiplomata += 5;
    pontosentinela += 5;
}
else {
    pontoanalista += 5;
}

if (prompt("Se você visse um amigo numa briga, você se meteria no meio? \n\n1️⃣ - Sim \n2️⃣ - Não") == "2") {
    pontodiplomata += 5;
}
else {
    pontoanalista += 5;
}

if (prompt("Imagine que exista uma fila enorme no supermercado e você tenha somente um item na sua mão, uma pessoa sai da fila rapidamente, você furaria a fila para adiantar seu tempo? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoexplorador += 5;
}
else {
    pontosentinela += 5;
}

if (prompt("Você acha difícil se apresentar para outras pessoas? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontosentinela += 5;
}
else {
    pontoexplorador += 5;
    pontoanalista += 5;
}

if (prompt("Geralmente, você não inicia conversas. \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontosentinela += 5;
}
else {
    pontoexplorador += 5;
    pontoanalista += 5;
}

if (prompt("Você fica frequentemente tão absorto em seus pensamentos que ignora ou esquece do seu entorno. \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5;
}
else {
    pontosentinela += 5;
}

if (prompt("Você fica chateado quando não é apreciado pelo quanto você se importa pelos outros? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontodiplomata += 5;
    pontosentinela += 5;
}
else {
    pontoanalista += 5;
}

if (prompt("Pessoas falsas incomodam você? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontodiplomata += 5;
    pontosentinela += 5;
}
else {
    pontoanalista += 5;
}

if (prompt("Você acredita que alcançar uma verdade é mais importante que ganhar um argumento. \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontosentinela += 5;
}
else {
    pontoanalista += 5;    
}

if (prompt("Em um debate, você faria de tudo para ganhar? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5;
    pontodiplomata += 5;
}
else {
    pontosentinela += 5;
}

if (prompt("Você costuma expressar simpatia somente após sentir empatia por alguém? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5; 
    pontosentinela += 5;
}
else {
    pontoexplorador += 5;
    pontodiplomata += 5;
}

if (prompt("Você valoriza inclusão e tenta o seu melhor para incluir todos em um grupo? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5;
    pontoexplorador += 5;
    pontodiplomata += 5;
}
else {
    pontosentinela += 5;
}

if (prompt("Você valoriza verdade e lógica mais que qualquer coisa? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontosentinela += 5;
    pontoanalista += 5;
}
else {
    pontodiplomata += 5;
}

if (prompt("Em uma situação difícil, você prefere disfarçar um problema de forma positiva ao invés de chatear alguém? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontodiplomata += 5;
}
else {
    pontosentinela += 5;
    pontoanalista += 5;
}

if (prompt("Na visão dos próximos, você pode ser visto como falso ou manipulativo? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5;
    pontosentinela += 5;
}
else {
    pontodiplomata += 5;
    pontoexplorador += 5;
}

if (prompt("Você trabalha sozinho para resolver problemas e se desapega de outras pessoas para chegar em uma conclusão? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5;
    pontosentinela += 5;
}
else {
    pontoexplorador += 5;
}

if (prompt("Você exala carisma e costuma ser visto pelos outros como charmoso? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoexplorador += 5;
}
else {
    pontosentinela += 5;
}

if (prompt("Você dá grande valor à tradição e ao dever? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontodiplomata += 5;
    pontosentinela += 5;
}
else {
    pontoanalista += 5;
}

if (prompt("Você se sente superior às outras pessoas? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5;
}
else {
    pontoexplorador += 5;
    pontodiplomata += 5;
}

if (prompt("Você frequentemente sente que tem que se justificar para outras pessoas? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontodiplomata += 5;
}
else {
    pontoanalista += 5;
}

if (prompt("Frequentemente, é difícil para você se relacionar com os sentimentos das outras pessoas? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontosentinela += 5;
}
else {
    pontoexplorador += 5;
}

if (prompt("Seu humor pode mudar muito rapidamente? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontosentinela += 5;
}
else {
    pontoexplorador += 5;
}

if (prompt("Ser capaz de desenvolver um plano e manter-se firme na sua execução é a parte mais importante de todo projeto? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontodiplomata += 5;
}
else {
    pontoanalista += 5;
}

if (prompt("Como pai/mãe, preferiria de ver seu/sua filho(a) crescer bondoso(a) do que inteligente? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoexplorador += 5;
    pontodiplomata += 5;
}
else {
    pontoanalista += 5;
}

if (prompt("Você quase nunca se atrasa para seus compromissos? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontosentinela += 5;
}
else {
    pontoanalista += 5;
}

if (prompt("Você gasta seu tempo de lazer socializando ativamente com um grupo de pessoas, participando de festas, fazendo compras, etc...? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5;
    pontoexplorador += 5;
}
else {
    pontosentinela += 5;
}

if (prompt("A sede de aventura é algo próximo ao seu coração? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoexplorador += 5;
}
else {
    pontodiplomata += 5;
}

if (prompt("É fácil para você se comunicar em situações sociais? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoexplorador += 5;
    pontoanalista += 5;
}
else {
    pontosentinela += 5;
}

if (prompt("Quando está com um grupo de pessoas, você gosta de estar diretamente envolvido e estar no centro das atenções? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5;
}
else {
    pontosentinela += 5;
}

if (prompt("Você sabe como colocar cada minuto do seu tempo em um bom propósito? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontodiplomata += 5;
}
else {
    pontoexplorador += 5;
}

if (prompt("Você confia na razão ao substituir os sentimentos? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontosentinela += 5;
}
else {
    pontodiplomata += 5;
}

if (prompt("Você acredita que a melhor decisão é aquela que pode ser facilmente alterada? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoanalista += 5;
}
else {
    pontoexplorador += 5;
}

if (prompt("Você gosta de estar envolvido em um trabalho ativo e em ritmo acelerado? \n\n1️⃣ - Sim \n2️⃣ - Não") == "1") {
    pontoexplorador += 5;
}
else {
    pontosentinela += 5;
}

var chamaFunction = verificaFinal(pontodiplomata, pontoanalista, pontoexplorador, pontosentinela);

///////////////////////////////////////////////////////////////////////////////////////
