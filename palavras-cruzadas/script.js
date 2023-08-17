// Trabalho de Palavras Misturadas - Greice Pereira 1C1

var menu, categoria, letra, p1, p2, p3, nome, embaralh1, embaralh11, embaralh111, embaralh2, embaralh22, embaralh222, embaralh3, embaralh33, embaralh333, final1, final2, final3, r1, r2, r3, pl, sl, escolha;

nome = prompt("Insira seu nome:");
alert("Olá " + nome + "! Bem vindo(a) ao Jogo de Palavras Misturadas!");

menu = prompt("Gostaria de saber como ele funciona? \n1 - Sim \n2 - Não");
alert("Em caso de desistência, insira 'sair' abaixo.");

if ( menu == "1" ) {

    alert("Seguinte... \n\nTemos dez categorias (dicas) com três palavras nas quais você terá que desembaralhar entre si para decifrar a palavra. \n\nBoa sorte " + nome + "!");
}

if ( Math.ceil(Math.random()*10) == 1 ) {

    categoria = "Harry Potter";

    p1 = "Reparo";
    p2 = "Lumos";
    p3 = "Expelliarmus";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length - 1 ; c++ ) {

        r1 = p1.charAt(c) + r1;

        embaralh1 = r1.substring(0,3);
        embaralh11 = p1.substring(4,5);

        final1 = embaralh11 + "p" + embaralh1 + "e";

    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length - 1 ; c++ ) {

        r2 = p2.charAt(c) + r2;

        embaralh2 = r2.substring(0,2);
        embaralh22 = p2.substring(2,3);

        final2 = embaralh22 + embaralh2 + "u" + "l";

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length - 1 ; c++ ) {

        r3 = p3.charAt(c) + r3;

        embaralh3 = r3.substring(0,3);
        embaralh33 = p3.substring(5,9);
        embaralh333 = r3.substring(7);

        final3 = embaralh33 + embaralh3 + embaralh333;

    }

    do {

    escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");

    if ( escolha == "1" ) {

    pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
    sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));

    if ( pl > sl ) {
        final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
}
    else if ( pl < sl ) {
        final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
}
    else if ( pl == sl ) {
        alert("Você acabou inserindo duas posições iguais!");
}
    for ( c = 0 ; c < final1.length ; c++ ) {

    if ( p1.charAt(c) == final1.charAt(c) ) {

        final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);

            } 
        }
    }
    if ( escolha == "2" ) {

    pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
    sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));

    if ( pl > sl ) {
        final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
}
    else if ( pl < sl ) {
        final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
}
    else if ( pl == sl ) {
        alert("Você acabou inserindo duas posições iguais!");
}
    for ( c = 0 ; c < final2.length ; c++ ) {

    if ( p2.charAt(c) == final2.charAt(c) ) {

        final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);

            } 
        }

    }

    if ( escolha == "3" ) {

    pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
    sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));

    if ( pl > sl ) {
        final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
}
    else if ( pl < sl ) {
        final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
}
    else if ( pl == sl ) {
        alert("Você acabou inserindo duas posições iguais!");
}
    for ( c = 0 ; c < final3.length ; c++ ) {

    if ( p3.charAt(c) == final3.charAt(c) ) {

        final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);

            } 
        }

    }

    if (escolha == "sair" ) {

        alert("Já desistiu? :( \n\nAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
    }

}

    
    while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");

        if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {

            escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");

        }
    }
    while (escolha == "1");

if ( Math.ceil(Math.random()*10) == 2 ) {

    categoria = "Cores";
    p1 = "Azul";
    p2 = "Vermelho";
    p3 = "Preto";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length ; c++ ){

        r1 = p1.charAt(c) + r1;
       
        embaralh1 = r1.substring(0,1);
        embaralh11 = p1.substring(0,1);
        embaralh111 = r1.substring(1,2);

        final1 = embaralh11 + embaralh111 + embaralh1 +  "z";
    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length ; c++ ) {

        r2 = p2.charAt(c) + r2;

        embaralh2 = r2.substring(0,4);
        embaralh22 = p2.substring(0,3);

        final2 = embaralh2 + "m" + embaralh22;

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length ; c++ ) {

        r3 = p3.charAt(c) + r3;

        embaralh3 = r3.substring(0,2);
        embaralh33 = p3.substring(0,2);

        final3 = embaralh3 + "e" + embaralh33;
    }

    do {

        escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");
    
        if ( escolha == "1" ) {
    
        pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
        sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));
    
        if ( pl > sl ) {
            final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final1.length ; c++ ) {
    
        if ( p1.charAt(c) == final1.charAt(c) ) {
    
            final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);
    
                } 
            }
        }
        if ( escolha == "2" ) {
    
        pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
        sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));
    
        if ( pl > sl ) {
            final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final2.length ; c++ ) {

        if ( p2.charAt(c) == final2.charAt(c) ) {
    
            final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);
    
                } 
            }

        }
    
        if ( escolha == "3" ) {
    
        pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
        sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));
    
        if ( pl > sl ) {
            final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final3.length ; c++ ) {

        if ( p3.charAt(c) == final3.charAt(c) ) {
    
            final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);
    
                } 
            }
        }

        if (escolha == "sair" ) {

            alert("Já desistiu? :( \n\nAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
        }
    
    }
        while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");
    
            if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {
    
                escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");
    
            }
    }
    while (escolha == "1");

if ( Math.ceil(Math.random()*10) == 3 ) {

    categoria = "Frutas";
    p1 = "Abacaxi";
    p2 = "Morango";
    p3 = "Laranja";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length ; c++ ) {

    r1 = p1.charAt(c) + r1;

    embaralh1 = r1.substring(0,4);
    embaralh11 = p1.substring(0,3);

    final1 = embaralh1 + embaralh11;

    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length ; c++ ) {

    r2 = p2.charAt(c) + r2;
    
    embaralh2 = r2.substring(0,3);
    embaralh22 = p2.substring(0,3);

    final2 = embaralh2 + "a" + embaralh22;

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length ; c++ ) {

    r3 = p3.charAt(c) + r3;

    embaralh3 = r3.substring(0,3);
    embaralh33 = p3.substring(0,3);

    final3 = embaralh3 + embaralh33;

    }

    do {

        escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");
    
        if ( escolha == "1" ) {
    
        pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
        sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));
    
        if ( pl > sl ) {
            final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final1.length ; c++ ) {
    
        if ( p1.charAt(c) == final1.charAt(c) ) {
    
            final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);
    
                } 
            }
        }
        if ( escolha == "2" ) {
    
        pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
        sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));
    
        if ( pl > sl ) {
            final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final2.length ; c++ ) {

        if ( p2.charAt(c) == final2.charAt(c) ) {
    
            final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);
    
                } 
            }
        }
    
        if ( escolha == "3" ) {
    
        pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
        sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));
    
        if ( pl > sl ) {
            final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final3.length ; c++ ) {

        if ( p3.charAt(c) == final3.charAt(c) ) {
    
            final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);
    
                } 
            }
        }

        if (escolha == "sair" ) {

            alert("Já desistiu? :( \n\nAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
        }
    
    }
        while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");
    
            if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {
    
                escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");
    
            }
    }
    while (escolha == "1");

if ( Math.ceil(Math.random()*10) == 4 ) {

    categoria = "Objetos";
    p1 = "Controle";
    p2 = "Celular";
    p3 = "Teclado";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length ; c++ ) {

    r1 = p1.charAt(c) + r1;

    embaralh1 = r1.substring(0,4);
    embaralh11 = p1.substring(0,4);

    final1 = embaralh1 + embaralh11;

    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length ; c++ ) {

    r2 = p2.charAt(c) + r2;

    embaralh2 = r2.substring(0,4);
    embaralh22 = p2.substring(0,3);

    final2 = embaralh2 + embaralh22;

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length ; c++ ) {

    r3 = p3.charAt(c) + r3;

    embaralh3 = r3.substring(0,4);
    embaralh33 = p3.substring(0,3);

    final3 = embaralh3 + embaralh33;

    }
    do {

        escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");
    
        if ( escolha == "1" ) {
    
        pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
        sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));
    
        if ( pl > sl ) {
            final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final1.length ; c++ ) {
    
        if ( p1.charAt(c) == final1.charAt(c) ) {
    
            final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);
    
                } 
            }
        }
        if ( escolha == "2" ) {
    
        pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
        sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));
    
        if ( pl > sl ) {
            final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final2.length ; c++ ) {

        if ( p2.charAt(c) == final2.charAt(c) ) {
    
            final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);
    
                } 
            }
        }
    
        if ( escolha == "3" ) {
    
        pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
        sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));
    
        if ( pl > sl ) {
            final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você inseriu duas posições iguais!");
    }
        for ( c = 0 ; c < final3.length ; c++ ) {

        if ( p3.charAt(c) == final3.charAt(c) ) {
    
            final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);
    
                } 
            }
        }

        if (escolha == "sair" ) {

            alert("Já desistiu? :( \n\nAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
        }
    
    }
        while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");
    
            if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {
    
                escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");
    
            }
    }
    while (escolha == "1");

if ( Math.ceil(Math.random()*10) == 5 ) {

    categoria = "Cidades";
    p1 = "Pelotas";
    p2 = "Lages";
    p3 = "Curitiba";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length ; c++ ) {

    r1 = p1.charAt(c) + r1;

    embaralh1 = r1.substring(0,4);
    embaralh11 = p1.substring(0,3);

    final1 = embaralh1 + embaralh11;

    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length ; c++ ) {

    r2 = p2.charAt(c) + r2;

    embaralh2 = r2.substring(0,3);
    embaralh22 = p2.substring(0,2);

    final2 = embaralh2 + embaralh22;

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length ; c++ ) {

    r3 = p3.charAt(c) + r3;

    embaralh3 = r3.substring(0,4);
    embaralh33 = p3.substring(0,4);

    final3 = embaralh3 + embaralh33;

    }

    do {

        escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");
    
        if ( escolha == "1" ) {
    
        pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
        sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));
    
        if ( pl > sl ) {
            final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final1.length ; c++ ) {
    
        if ( p1.charAt(c) == final1.charAt(c) ) {
    
            final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);
    
                } 
            }
        }
        if ( escolha == "2" ) {
    
        pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
        sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));
    
        if ( pl > sl ) {
            final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final2.length ; c++ ) {

        if ( p2.charAt(c) == final2.charAt(c) ) {
    
            final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);
    
                } 
            }
        }
    
        if ( escolha == "3" ) {
    
        pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
        sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));
    
        if ( pl > sl ) {
            final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final3.length ; c++ ) {

        if ( p3.charAt(c) == final3.charAt(c) ) {
    
            final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);
    
                } 
            }
    
        }

        if (escolha == "sair" ) {

            alert("Já desistiu? :( \n\nnAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
        }
    
    }
        while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");
    
            if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {
    
                escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");
    
            }
    }
    while (escolha == "1");

if ( Math.ceil(Math.random()*10) == 6 ) {

    categoria = "Profissões";
    p1 = "Engenheiro";
    p2 = "Enfermeiro";
    p3 = "Nutricionista";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length ; c++ ) {

    r1 = p1.charAt(c) + r1;

    embaralh1 = r1.substring(0,6);
    embaralh11 = p1.substring(0,5);

    final1 = embaralh1 + embaralh11;

    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length ; c++ ) {

    r2 = p2.charAt(c) + r2;

    embaralh2 = r2.substring(0,5);
    embaralh22 = p2.substring(0,5);

    final2 = embaralh2 + embaralh22;

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length ; c++ ) {

    r3 = p3.charAt(c) + r3;

    embaralh3 = r3.substring(0,11);
    embaralh33 = p3.substring(0,2);

    final3 = embaralh3 + embaralh33;

    }

    do {

        escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");
    
        if ( escolha == "1" ) {
    
        pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
        sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));
    
        if ( pl > sl ) {
            final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final1.length ; c++ ) {
    
        if ( p1.charAt(c) == final1.charAt(c) ) {
    
            final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);
    
                } 
            }
        }
        if ( escolha == "2" ) {
    
        pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
        sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));
    
        if ( pl > sl ) {
            final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final2.length ; c++ ) {

        if ( p2.charAt(c) == final2.charAt(c) ) {
    
            final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);
    
                } 
            }
        }
    
        if ( escolha == "3" ) {
    
        pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
        sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));
    
        if ( pl > sl ) {
            final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final3.length ; c++ ) {

        if ( p3.charAt(c) == final3.charAt(c) ) {
    
            final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);
    
                } 
            }
        }

        if (escolha == "sair" ) {

            alert("Já desistiu? :( \n\nAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
        }
    
    }
        while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");
    
            if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {
    
                escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");
    
            }
    }
    while (escolha == "1");

if ( Math.ceil(Math.random()*10) == 7 ) {

    categoria = "Séries";
    p1 = "Riverdale";
    p2 = "Supernatural";
    p3 = "Elite";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length ; c++ ) {

    r1 = p1.charAt(c) + r1;

    embaralh1 = r1.substring(0,7);
    embaralh11 = p1.substring(0,2);

    final1 = embaralh1 + embaralh11;

    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length ; c++ ) {

    r2 = p2.charAt(c) + r2;

    embaralh2 = r2.substring(0,10);
    embaralh22 = p2.substring(0,2);

    final2 = embaralh2 + embaralh22;

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length ; c++ ) {

    r3 = p3.charAt(c) + r3;

    embaralh3 = r3.substring(0,3);
    embaralh33 = p3.substring(0,2);

    final3 = embaralh3 + embaralh33;

    }

    do {

        escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");
    
        if ( escolha == "1" ) {
    
        pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
        sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));
    
        if ( pl > sl ) {
            final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final1.length ; c++ ) {
    
        if ( p1.charAt(c) == final1.charAt(c) ) {
    
            final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);
    
                } 
            }
        }
        if ( escolha == "2" ) {
    
        pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
        sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));
    
        if ( pl > sl ) {
            final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final2.length ; c++ ) {

        if ( p2.charAt(c) == final2.charAt(c) ) {
    
            final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);
    
                } 
            }
        }
    
        if ( escolha == "3" ) {
    
        pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
        sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));
    
        if ( pl > sl ) {
            final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você inseriu duas posições iguais!");
    }
        for ( c = 0 ; c < final3.length ; c++ ) {

        if ( p3.charAt(c) == final3.charAt(c) ) {
    
            final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);
    
                } 
            }
        }

        if (escolha == "sair" ) {

            alert("Já desistiu? :( \n\nAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
        }
    
    }
        while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");
    
            if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {
    
                escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");
    
            }
    }
    while (escolha == "1");

if ( Math.ceil(Math.random()*10) == 8 ) {

    categoria = "Churrasco";
    p1 = "Costela";
    p2 = "Refrigerante";
    p3 = "Salada";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length ; c++ ) {

    r1 = p1.charAt(c) + r1;

    embaralh1 = r1.substring(0,5);
    embaralh11 = p1.substring(0,2);

    final1 = embaralh1 + embaralh11;

    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length ; c++ ) {

    r2 = p2.charAt(c) + r2;

    embaralh2 = r2.substring(0,10);
    embaralh22 = p2.substring(0,2);

    final2 = embaralh2 + embaralh22;

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length ; c++ ) {

    r3 = p3.charAt(c) + r3;

    embaralh3 = r3.substring(0,2);
    embaralh33 = p3.substring(0,2);
    embaralh333 = r3.substring(2,4);

    final3 = embaralh3 + embaralh33 + embaralh333;

    }

    do {

        escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");
    
        if ( escolha == "1" ) {
    
        pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
        sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));
    
        if ( pl > sl ) {
            final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final1.length ; c++ ) {
    
        if ( p1.charAt(c) == final1.charAt(c) ) {
    
            final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);
    
                } 
            }
        }
        if ( escolha == "2" ) {
    
        pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
        sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));
    
        if ( pl > sl ) {
            final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final2.length ; c++ ) {

        if ( p2.charAt(c) == final2.charAt(c) ) {
    
            final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);
    
                } 
            }
        }
    
        if ( escolha == "3" ) {
    
        pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
        sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));
    
        if ( pl > sl ) {
            final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final3.length ; c++ ) {

        if ( p3.charAt(c) == final3.charAt(c) ) {
    
            final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);
    
                } 
            }
        }
        if (escolha == "sair" ) {

            alert("Já desistiu? :( \n\nAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
        }
    
    }
        while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");
    
            if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {
    
                escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");
    
            }
    }
    while (escolha == "1");

if ( Math.ceil(Math.random()*10) == 9 ) {

    categoria = "Roupas";
    p1 = "Sapato";
    p2 = "Blusa";
    p3 = "Legging";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length ; c++ ) {
    
    r1 = p1.charAt(c) + r1;

    embaralh1 = r1.substring(0,2);
    embaralh11 = p1.substring(0,1);
    embaralh111 = r1.substring(2,4);

    final1 = "a" + embaralh1 + embaralh11 + embaralh111;
   
    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length ; c++ ) {

    r2 = p2.charAt(c) + r2;

    embaralh2 = r2.substring(0,2);
    embaralh22 = p2.substring(0,2);

    final2 = embaralh2 + "u" + embaralh22;

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length ; c++ ) {

    r3 = p3.charAt(c) + r3;

    embaralh3 = r3.substring(0,4);
    embaralh33 = p3.substring(0,2);

    final3 = "g" + embaralh3 + embaralh33;
    
    }

    do {

        escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");
    
        if ( escolha == "1" ) {
    
        pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
        sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));
    
        if ( pl > sl ) {
            final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final1.length ; c++ ) {
    
        if ( p1.charAt(c) == final1.charAt(c) ) {
    
            final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);
    
                } 
            }
        }
        if ( escolha == "2" ) {
    
        pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
        sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));
    
        if ( pl > sl ) {
            final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final2.length ; c++ ) {

        if ( p2.charAt(c) == final2.charAt(c) ) {
    
            final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);
    
                } 
            }
        }
    
        if ( escolha == "3" ) {
    
        pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
        sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));
    
        if ( pl > sl ) {
            final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final3.length ; c++ ) {

        if ( p3.charAt(c) == final3.charAt(c) ) {
    
            final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);
    
                } 
            }
        }

        if (escolha == "sair" ) {

            alert("Já desistiu? :( \n\nAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
        }
    
    }
        while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");
    
            if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {
    
                escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");
    
            }
    }
    while (escolha == "1");

if ( Math.ceil(Math.random()*10) == 10 ) {

    categoria = "Mercado";
    p1 = "Shampoo";
    p2 = "Chocolate";
    p3 = "Carne";

    r1 = " ";
    p1 = (p1.toLowerCase());

    for ( c = 0 ; c <= p1.length ; c++ ) {

    r1 = p1.charAt(c) + r1;

    embaralh1 = r1.substring(0,2);
    embaralh11 = p1.substring(0,2);
    embaralh111 = r1.substring(2,4);

    final1 = embaralh1 + "a" + embaralh111 + embaralh11;

    }

    r2 = " ";
    p2 = (p2.toLowerCase());

    for ( c = 0 ; c <= p2.length ; c++ ) {

    r2 = p2.charAt(c) + r2;

    embaralh2 = r2.substring(0,4);
    embaralh22 = p2.substring(0,2);
    embaralh222 = p2.substring(2,4);

    final2 = "o" + embaralh222 + embaralh2 + embaralh22;

    }

    r3 = " ";
    p3 = (p3.toLowerCase());

    for ( c = 0 ; c <= p3.length ; c++ ) {

    r3 = p3.charAt(c) + r3;

    embaralh3 = r3.substring(0,2);
    embaralh33 = p3.substring(0,2);

    final3 = embaralh3 + "r" + embaralh33;

    }

    do {

        escolha = prompt("A categoria é: " + "\n" + categoria + "\n\n" + final1 +"\n"+ final2 + "\n" + final3 + "\n\nInsira a palavra na qual deseja mudar a posição (1, 2 ou 3):");
    
        if ( escolha == "1" ) {
    
        pl = Number(prompt(final1 + "\n\nInsira a posição da primeira letra (0 a " + (final1.length - 1) + "):"));
        sl = Number(prompt(final1 + "\n\nInsira a posição da segunda letra (0 a " + (final1.length - 1) + "):"));
    
        if ( pl > sl ) {
            final1 = final1.substring(0,sl) + final1.charAt(pl) + final1.substring(sl + 1,pl) + final1.charAt(sl) + final1.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final1 = final1.substring(0,pl) + final1.charAt(sl) + final1.substring(pl + 1,sl) + final1.charAt(pl) + final1.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final1.length ; c++ ) {
    
        if ( p1.charAt(c) == final1.charAt(c) ) {
    
            final1 = final1.substring(0,c) + final1.charAt(c).toUpperCase() + final1.substring(c + 1);
    
                } 
            }
        }
        if ( escolha == "2" ) {
    
        pl = Number(prompt(final2 + "\n\nInsira a posição da primeira letra (0 a " + (final2.length - 1) + "):"));
        sl = Number(prompt(final2 + "\n\nInsira a posição da segunda letra (0 a " + (final2.length - 1) + "):"));
    
        if ( pl > sl ) {
            final2 = final2.substring(0,sl) + final2.charAt(pl) + final2.substring(sl + 1,pl) + final2.charAt(sl) + final2.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final2 = final2.substring(0,pl) + final2.charAt(sl) + final2.substring(pl + 1,sl) + final2.charAt(pl) + final2.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final2.length ; c++ ) {

        if ( p2.charAt(c) == final2.charAt(c) ) {
    
            final2 = final2.substring(0,c) + final2.charAt(c).toUpperCase() + final2.substring(c + 1);
    
                } 
            }
        }
    
        if ( escolha == "3" ) {
    
        pl = Number(prompt(final3 + "\n\nInsira a posição da primeira letra (0 a " + (final3.length - 1) + "):"));
        sl = Number(prompt(final3 + "\n\nInsira a posição da segunda letra (0 a " + (final3.length - 1) + "):"));
    
        if ( pl > sl ) {
            final3 = final3.substring(0,sl) + final3.charAt(pl) + final3.substring(sl + 1,pl) + final3.charAt(sl) + final3.substring(pl + 1); 
    }
        else if ( pl < sl ) {
            final3 = final3.substring(0,pl) + final3.charAt(sl) + final3.substring(pl + 1,sl) + final3.charAt(pl) + final3.substring(sl + 1);
    }
        else if ( pl == sl ) {
            alert("Você acabou inserindo duas posições iguais!");
    }
        for ( c = 0 ; c < final3.length ; c++ ) {

        if ( p3.charAt(c) == final3.charAt(c) ) {
    
            final3 = final3.substring(0,c) + final3.charAt(c).toUpperCase() + final3.substring(c + 1);
    
                } 
            }
        }

        if (escolha == "sair" ) {

            alert("Já desistiu? :( \n\nAs palavras eram: " + "\n\n" + p1 + "\n" + p2 + "\n" + p3);
        }
    
    }
        while ((final1 != p1.toUpperCase() || final2 != p2.toUpperCase() || final3 != p3.toUpperCase()) && escolha != "sair");
    
            if ( final1 == p1.toUpperCase() && final2 == p2.toUpperCase() && final3 == p3.toUpperCase()) {
    
                escolha = prompt("VOCÊ VENCEU! \nPARABÉNS ツ \nDeseja jogar novamente? \n1 - Sim \n2 - Não");
    
            }
    }
    while (escolha == "1");
