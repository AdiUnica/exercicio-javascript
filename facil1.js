/*Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles */

function mostrarNumeroMaior() {
     let numero1 = parseFloat(document.getElementById("num1").value);
     let numero2 = parseFloat(document.getElementById("num2").value);
     let numeroMaior = verificarMaiorNumero(numero1, numero2);
     window.alert(numeroMaior);
   }
   
   function verificarMaiorNumero(numero1, numero2) {
     if (numero1 > numero2) {
       return numero1 + " é maior que " + numero2;
     } else if (numero2 > numero1) {
       return numero2 + " é maior que " + numero1;
     } else {
       return "Os números são iguais.";
     }
   }
   
   module.exports = {
     verificarMaiorNumero: verificarMaiorNumero
   };
   