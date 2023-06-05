/* Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, 
quando divididos por 11 produzam resto igual a 2.*/




function verificarNumeros() {

    let resultado = '';
    for (var numero = 1000; numero <= 2000; numero++) {

        if (numero % 11 === 2) {
            resultado += numero + "\n";
        }
    }
    window.alert(resultado);
}




