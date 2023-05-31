/*  Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número. */


function calcularTabuada() {
    let numero = parseInt(document.getElementById("numero").value);

    for (let i = 1; i < 11; i++) {
        document.write(numero + " X " + i + " = " + (numero * i) +"<br>");
        
    }
    
    let resultado = '';

    for (let i = 1; i < 11; i++) {
        resultado += numero + " X " + i + " = " + (numero * i) +"\n";
    }
    window.alert(resultado);
}






/* function calcularTabuada() {
    var numero = parseInt(document.getElementById("numero").value);

    let i = 1
    while ( i < 11) {
        document.write(numero + " X " + i + " = " + (numero * i) +"<br>");
        i++;
    }
    */