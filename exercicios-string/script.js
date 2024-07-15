// Lista de Exercícios 4 (String) - Greice Pereira 1C1
// 1 - Escreva um programa que codifica palavras da língua inglesa em Pig Latin.
var p, a;
p = prompt("Insira uma palavra:");
a = p.substr(0, 1);
alert(p.substring(1) + a + "ay");
// 2 - Escreva um programa que leia uma palavra ou frase e também leia uma letra. O programa deve mostrar quantas vezes a letra aparece na palavra ou frase.
var l, p, r, l2 = " ";
p = prompt("Insira sua palavra/frase:");
l = prompt("Insira sua letra:");
for (c = 0; c < p.length; c++) {
    l2 = p.charAt(c);
    if (l == l2) {
        r = l2.length;
        console.log(l2);
    }
}
// 3 - Escreva um programa que leia uma palavra sem acentos e cedilha e mostre essa palavra em letras minúsculas, com a primeira letra em maiúsculo.
var p, a, c;
p = prompt("Insira uma palavra:");
for (c = 0; c < p.length; c++) {
    if (p.charAt(c) == "ç") {
        a = p = p.replace("ç", "c");
    }
    if (p.charAt(c) == "é") {
        a = p = p.replace("é", "e");
    }
    if (p.charAt(c) == "ã") {
        a = p = p.replace("ã", "a");
    }
    if (p.charAt(c) == "õ") {
        a = p = p.replace("õ", "o");
    }
    if (p.charAt(c) == "ê") {
        a = p = p.replace("ê", "e");
    }
    if (p.charAt(c) == "â") {
        a = p = p.replace("â", "a");
    }
    if (p.charAt(c) == "í") {
        a = p = p.replace("í", "i");
    }
    if (p.charAt(c) == "à") {
        a = p = p.replace("à", "a");
    }
    if (p.charAt(c) == "á") {
        a = p = p.replace("á", "a");
    }
    if (p.charAt(c) == "è") {
        a = p = p.replace("è", "e");
    }
    if (p.charAt(c) == "ì") {
        a = p = p.replace("ì", "i");
    }
    if (p.charAt(c) == "ú") {
        a = p = p.replace("ú", "u");
    }
    if (p.charAt(c) == "ù") {
        a = p = p.replace("ù", "u");
    }
}
alert(p.charAt(0).toUpperCase() + p.slice(1));
// 4 - Escreva um programa que leia o código DDD e um número de telefone e monte uma String no formato pedido, em que D representa um dígito do DDD e N um dígito do número de telefone.
var n, d, e = " ";
n = prompt("Insira o número de telefone:");
d = n.substring(0, 2);
n2 = n.substring(6, 11);
alert("(" + d + ")" + e + n.substring(2, 6) + "-" + n2);
// 5 - Escreva um programa que leia um String contendo um número de telefone no formato pedido.
var dn, ddd, n;
dn = prompt("Insira o número de telefone:");
if (dn.charAt(0) == "(" && dn.charAt(3) == ")" || dn.charAt(4) == " " && dn.charAt(9) == "-") {
    ddd = dn.substring(1, 3);
    alert("DDD: " + ddd);
    n = dn.substring(4, 14);
    alert("Número de Telefone: " + n.trim());
} else {
    alert("Número de telefone incorreto.");
}
// 6 - Escreva um programa que é capaz de gerar o plural de algumas palavras em inglês. O programa deve ler uma palavra, convertê-la para letras minúsculas, e mostrar seu plural na tela.
var p;
p = prompt("Insira uma palavra em inglês:").toLowerCase();
if (p.endsWith("o") || p.endsWith("ch") || p.endsWith("sh") || p.endsWith("ss") || p.endsWith("x") || p.endsWith("z")) {
    alert(p + "es");
} else if (p.endsWith("y")) {
    alert(p.replace("y", "ies"));
} else {
    alert(p + "s");
}
// 7 - Escreva um programa que lê uma data no primeiro formato (como String) e mostre essa data no formato pedido.
var d;
d = prompt("Insira uma data:");
if (d.charAt(3) == "0" && d.charAt(4) == "1") {
    alert(d.substring(0, 2) + " de janeiro de " + d.substring(6));
}
if (d.charAt(3) == "0" && d.charAt(4) == "2") {
    alert(d.substring(0, 2) + " de fevereiro de " + d.substring(6));
}
if (d.charAt(3) == "0" && d.charAt(4) == "3") {
    alert(d.substring(0, 2) + " de março de " + d.substring(6));
}
if (d.charAt(3) == "0" && d.charAt(4) == "4") {
    alert(d.substring(0, 2) + " de abril de " + d.substring(6));
}
if (d.charAt(3) == "0" && d.charAt(4) == "5") {
    alert(d.substring(0, 2) + " de maio de " + d.substring(6));
}
if (d.charAt(3) == "0" && d.charAt(4) == "6") {
    alert(d.substring(0, 2) + " de junho de " + d.substring(6));
}
if (d.charAt(3) == "0" && d.charAt(4) == "7") {
    alert(d.substring(0, 2) + " de julho de " + d.substring(6));
}
if (d.charAt(3) == "0" && d.charAt(4) == "8") {
    alert(d.substring(0, 2) + " de agosto de " + d.substring(6));
}
if (d.charAt(3) == "0" && d.charAt(4) == "9") {
    alert(d.substring(0, 2) + " de setembro de " + d.substring(6));
}
if (d.charAt(3) == "1" && d.charAt(4) == "0") {
    alert(d.substring(0, 2) + " de outubro de " + d.substring(6));
}
if (d.charAt(3) == "1" && d.charAt(4) == "1") {
    alert(d.substring(0, 2) + " de novembro de " + d.substring(6));
}
if (d.charAt(3) == "1" && d.charAt(4) == "2") {
    alert(d.substring(0, 2) + " de dezembro de " + d.substring(6));
}
// 8 - Escreva um programa que leia uma data no formato DD/MM/AAAA como String e diga se a data é valida ou não.
var dc, d, m, a;
dc = prompt("Insira uma data (DD/MM/AAAA):");
if (dc.length === 10 && (dc.charAt(2) === '/' || dc.charAt(2) === '-' || dc.charAt(2) === '.') && (dc.charAt(5) === '/' || dc.charAt(5) === '-' || dc.charAt(5) === '.')) {
    d = parseInt(dc.substring(0, 2), 10);
    m = parseInt(dc.substring(3, 5), 10);
    a = parseInt(dc.substring(6, 10), 10);
    if (m >= 1 && m <= 12) {
        var diasNoMes;
        switch (m) {
            case 2:
                if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)) {
                    diasNoMes = 29;
                } else {
                    diasNoMes = 28;
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                diasNoMes = 30;
                break;
            default:
                diasNoMes = 31;
                break;
        }
        if (d >= 1 && d <= diasNoMes) {
            alert("A data é válida!");
        } else {
            alert("O dia da data é INVÁLIDO!");
        }
    } else {
        alert("O mês da data é INVÁLIDO!");
    }
} else {
    alert("O formato da data é INVÁLIDO!");
}
// 9 - Escreva um programa que verifique se uma string é ou não um palíndromo.
var p, c, r = "";
p = prompt("Digite uma palavra para verificar se é um palíndromo:").replaceAll(" ", "");
for (c = p.length - 1; c >= 0; c--) {
    r = r + p.charAt(c);
}
if (r == p) {
    alert("A String é um palíndromo!");
} else {
    alert("A String NÃO É um palíndromo!");
}
// 10 - Escreva um programa que, a partir de um nome informado pelo usuário, exiba suas iniciais.
var n, p1;
n = prompt("Insira um nome:");
p1 = n.charAt(0);
for (c = 0; c < n.length; c++) {
    if (n.charAt(c) == " ") {
        if (n.substring(c + 1, c + 3) != "e " && n.substring(c + 1, c + 4) != "do " && n.substring(c + 1, c + 4) != "da " && n.substring(c + 1, c + 4) != "de " && n.substring(c + 1, c + 4) != "di " && n.substring(c + 1, c + 4) != "du " && n.substring(c + 1, c + 5) != "dos " && n.substring(c + 1, c + 5) != "das ") {
            p1 += n.charAt(c + 1);
        }
    }
}
alert(p1.toUpperCase());
