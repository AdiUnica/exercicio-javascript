/*  Faça um Programa que leia um número e exiba o dia correspondente da semana. (1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido) */


function mostrarDiaDaSemana() {
    var numero = parseFloat(document.getElementById("numero").value);


    if (numero == "1") {
        window.alert("Hoje é domingo!");
    } else if (numero == "2") {
        window.alert("Hoje é segunda!");
    } else if (numero == "3") {
        window.alert("Hoje é terça!");
    } else if (numero == "4") {
        window.alert("Hoje é quarta!");
    } else if (numero == "5") {
        window.alert("Hoje é quinta!");
    } else if (numero == "6") {
        window.alert("Hoje é sexta!");
    } else if (numero == "7") {
        window.alert("Hoje é sábado!");
    } else {
        window.alert("Valor inválido!");
    }
}
