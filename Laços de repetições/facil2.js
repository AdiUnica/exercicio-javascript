/*  Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição. */


function calcularTabuadas() {
    for (let i = 1; i < 11; i++) {
        document.write("<p>Tabuada do " + i + "</p>");
        for (let j = 1; j < 11; j++) {
            document.write(i + " x " + j + " = " + (i * j) + "<br>");
        }

    }
}