/*  Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número. */

function calcularTabuada() {
    let numeroInput = document.getElementById("numero");
    let resultadoDiv = document.getElementById("resultado");
    let numero = parseInt(numeroInput.value);
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "Por favor, digite um número válido.";
        return;
    }

    let resultadoTexto = "";

    for (let i = 1; i <= 10; i++) {
        resultadoTexto += numero + " x " + i + " = " + (numero * i) + "<br>";
    }

    resultadoDiv.innerHTML = resultadoTexto;
}














/*
function tabuada() {
    let num = parseInt(document.getElementById("num").value);
    let resposta = document.getElementById('resposta');
    let tabuada = '';

    for (var i = 1; i <= 10; i++) 
        tabuada += num + " x " + i + " = " +
           num * i +
    
}*/




/*
    let i;
    let numero;

    for (let i = i < 11; i++) {
        document.write (valor + "x +");
      
}
}*/