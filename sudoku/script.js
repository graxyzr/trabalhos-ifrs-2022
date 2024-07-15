// Sudoku - Greice Pereira 1C1

function verificarQCL0(numero) {
    if (pos == 3 && sapoku[0][3] == "🐸" && sapoku[0][0] != numero && sapoku[0][1] != numero && sapoku[0][2] != numero && sapoku[1][2] != numero && sapoku[1][3] != numero && sapoku[2][3] != numero && sapoku[3][3] != numero) {
        sapoku[0][pos] = numero;
        alert("Você selecionou um valor válido!" + "\n\n" + sapoku[0]);
    } else {
        alert("Não é possível inserir esse número!");
    }
}

function verificarQCL1(numero) {
    if ((pos == 0 && sapoku[1][0] == "🐸" && sapoku[1][1] != numero && sapoku[1][2] != numero && sapoku[1][3] != numero && sapoku[0][0] != numero && sapoku[0][1] != numero && sapoku[2][0] != numero && sapoku[3][0] != numero) || (pos == 1 && sapoku[1][1] == "🐸" && sapoku[0][0] != numero && sapoku[0][1] != numero && sapoku[1][0] != numero && sapoku[1][2] != numero && sapoku[1][3] != numero && sapoku[2][1] != numero && sapoku[3][1] != numero) || (pos == 2 && sapoku[1][2] == "🐸" && sapoku[1][0] != numero && sapoku[1][1] != numero && sapoku[1][3] != numero && sapoku[0][2] != numero && sapoku[0][3] != numero && sapoku[2][2] != numero && sapoku[3][2] != numero) || (pos == 3 && sapoku[1][3] == "🐸" && sapoku[1][0] != numero && sapoku[1][1] != numero && sapoku[1][2] != numero && sapoku[0][2] != numero && sapoku[0][3] != numero && sapoku[2][3] != numero && sapoku[3][3] != numero)) {
        sapoku[1][pos] = numero;
        alert("Você selecionou um valor válido!" + "\n\n" + sapoku[1]);
    } else {
        alert("Não é possível inserir esse número!");
    }
}

function verificarQCL2(numero) {
    if (pos == 2 && sapoku[2][2] == "🐸" && sapoku[2][0] != numero && sapoku[2][1] != numero && sapoku[2][3] != numero && sapoku[3][2] != numero && sapoku[3][3] != numero && sapoku[0][2] != numero && sapoku[1][2] != numero && sapoku[3][2] != numero) {
        sapoku[2][pos] = numero;
        alert("Você selecionou um valor válido!" + "\n\n" + sapoku[2]);
    } else {
        alert("Não é possível inserir esse número!");
    }
}

function verificarQCL3(numero) {
    if ((pos == 0 && sapoku[3][0] == "🐸" && sapoku[3][1] != numero && sapoku[3][2] != numero && sapoku[3][3] != numero && sapoku[2][0] != numero && sapoku[2][1] != numero && sapoku[0][0] != numero && sapoku[1][0] != numero && sapoku[2][0] != numero) || (pos == 3 && sapoku[3][3] == "🐸" && sapoku[3][0] != numero && sapoku[3][1] != numero && sapoku[3][2] != numero && sapoku[2][2] != numero && sapoku[2][3] != numero && sapoku[0][3] != numero && sapoku[1][3] != numero)) {
        sapoku[3][pos] = numero;
        alert("Você selecionou um valor válido!" + "\n\n" + sapoku[3]);
    } else {
        alert("Não é possível inserir esse número!");
    }
}

do {
    var nome, sapoku, saporesp, pos, n;

    nome = prompt("Bem vindo(a) ao Sudoku do Saporeco! 🐸 \n\nInforme o seu nome abaixo:\n");
    alert("Olá " + nome + "! Vamos para a introdução.");
    alert("Sobre o Sudoku:\n\nSudoku é um jogo baseado na colocação lógica de números. O objetivo do jogo é a colocação de números em cada uma das células vazias numa grade, constituída por subgrades chamadas regiões.");

    sapoku = [[3, 4, 1, "🐸"],
    ["🐸", "🐸", "🐸", "🐸"],
    [2, 1, "🐸", 3],
    ["🐸", 3, 2, "🐸"]];

    do {
        saporesp = prompt("Informe a linha onde deseja modificar: \n0️⃣ - | " + sapoku[0] + " |" + "\n1️⃣ - | " + sapoku[1] + " |" + "\n2️⃣ - | " + sapoku[2] + " |" + "\n3️⃣ - | " + sapoku[3] + " |");

        if (saporesp == "0") {
            pos = Number(prompt("0️⃣ - | " + sapoku[0] + " |" + "\n1️⃣ - | " + sapoku[1] + " |" + "\n2️⃣ - | " + sapoku[2] + " |" + "\n3️⃣ - | " + sapoku[3] + " |" + "\n\n" + "Você escolheu a LINHA 0 \n\n0️⃣ - | " + sapoku[0] + " |" + "\n\nInforme a posição do espaço onde deseja colocar o número:"));
            n = Number(prompt("0️⃣ - | " + sapoku[0] + " |" + "\n1️⃣ - | " + sapoku[1] + " |" + "\n2️⃣ - | " + sapoku[2] + " |" + "\n3️⃣ - | " + sapoku[3] + " |" + "\n\n" + "0️⃣ - | " + sapoku[0] + " |" + "\n\nInforme um número ( 1 a 4 ):"));
            var chamarQCL0 = verificarQCL0(n);
        }

        if (saporesp == "1") {
            pos = Number(prompt("0️⃣ - | " + sapoku[0] + " |" + "\n1️⃣ - | " + sapoku[1] + " |" + "\n2️⃣ - | " + sapoku[2] + " |" + "\n3️⃣ - | " + sapoku[3] + " |" + "\n\n" + "Você escolheu a LINHA 1 \n\n1️⃣ - | " + sapoku[1] + " |" + "\n\nInforme a posição do espaço onde deseja colocar o número:"));
            n = Number(prompt("0️⃣ - | " + sapoku[0] + " |" + "\n1️⃣ - | " + sapoku[1] + " |" + "\n2️⃣ - | " + sapoku[2] + " |" + "\n3️⃣ - | " + sapoku[3] + " |" + "\n\n" + "1️⃣ - | " + sapoku[1] + " |" + "\n\nInforme um número ( 1 a 4 ):"));
            var chamarQCL1 = verificarQCL1(n);
        }

        if (saporesp == "2") {
            pos = Number(prompt("0️⃣ - | " + sapoku[0] + " |" + "\n1️⃣ - | " + sapoku[1] + " |" + "\n2️⃣ - | " + sapoku[2] + " |" + "\n3️⃣ - | " + sapoku[3] + " |" + "\n\n" + "Você escolheu a LINHA 2 \n\n2️⃣ - | " + sapoku[2] + " |" + "\n\nInforme a posição do espaço onde deseja colocar o número:"));
            n = Number(prompt("0️⃣ - | " + sapoku[0] + " |" + "\n1️⃣ - | " + sapoku[1] + " |" + "\n2️⃣ - | " + sapoku[2] + " |" + "\n3️⃣ - | " + sapoku[3] + " |" + "\n\n" + "2️⃣ - | " + sapoku[2] + " |" + "\n\nInforme um número ( 1 a 4 ):"));
            var chamarQCL2 = verificarQCL2(n);
        }

        if (saporesp == "3") {
            pos = Number(prompt("0️⃣ - | " + sapoku[0] + " |" + "\n1️⃣ - | " + sapoku[1] + " |" + "\n2️⃣ - | " + sapoku[2] + " |" + "\n3️⃣ - | " + sapoku[3] + " |" + "\n\n" + "Você escolheu a LINHA 3 \n\n3️⃣ - | " + sapoku[3] + " |" + "\n\nInforme a posição do espaço onde deseja colocar o número:"));
            n = Number(prompt("0️⃣ - | " + sapoku[0] + " |" + "\n1️⃣ - | " + sapoku[1] + " |" + "\n2️⃣ - | " + sapoku[2] + " |" + "\n3️⃣ - | " + sapoku[3] + " |" + "\n\n" + "3️⃣ - | " + sapoku[3] + " |" + "\n\nInforme um número ( 1 a 4 ):"));
            var chamarQLC3 = verificarQCL3(n);
        }

    } while ((sapoku[0][3] == "🐸" || sapoku[1][0] == "🐸" || sapoku[1][1] == "🐸" || sapoku[1][2] == "🐸" || sapoku[1][3] == "🐸" || sapoku[2][2] == "🐸" || sapoku[3][0] == "🐸" || sapoku[3][3] == "🐸") && (saporesp != "sair" && saporesp != "SAIR"));

    if (saporesp == "sair" || saporesp == "SAIR") {
        alert("Você inseriu a opção 'sair' \n\nQue pena... Espero que tenha se divertido.")
        jgnv = 2;
    } else {
        alert("Você terminou o Sudoku! \n\nParabéns do Saporeco 🐸");
        jgnv = Number(prompt("Você deseja jogar novamente? 🐸 \n\n1️⃣ - Sim \n2️⃣ - Não"));
    }
} while (jgnv == 1);
