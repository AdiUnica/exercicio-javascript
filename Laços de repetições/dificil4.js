/* Faça um programa que leia um valor n, inteiro e positivo, calcule e mostre a seguinte soma: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n.*/



function calcularSoma() {
    let n = parseInt(document.getElementById("valorN").value);
    let soma = 0;
    
    for (var i = 1; i <= n; i++) {
      soma += 1 / i;
    }
    
    document.write(`O resultado da soma é ${soma.toFixed(2)}`);
  }
  
  









