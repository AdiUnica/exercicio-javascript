/*Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles */


function verificarMaiorNumero() {
        let numero1 = parseFloat(document.getElementById("num1").value);
        let numero2 = parseFloat(document.getElementById("num2").value);
        if (numero1 > numero2) {
             window.alert(numero1 + " é maior que " + numero2);
        } else {
        if (numero2 > numero1);
             window.alert(numero2 + " é maior que " + numero1);
        }
}
