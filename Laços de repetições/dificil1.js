/*  Faça um programa que receba um número e usando laços de repetição calcule
 e mostre a tabuada desse número. */

 function mostrarTabuada() {
    let numero = parseInt(document.getElementById("numero").value);
    let tabuada = calcularTabuada(numero);
 
     window.alert(tabuada);
 }
 function calcularTabuada(numero) {
    let resultado = '';

    for (let i = 1; i < 11; i++) {
        resultado += numero + " X " + i + " = " + (numero * i) + "\n";
    }

    return resultado;
}


module.exports = {
    calcularTabuada: calcularTabuada,
  };






