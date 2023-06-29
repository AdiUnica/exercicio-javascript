/* Faça um programa que leia um valor n, inteiro e positivo, calcule e mostre a
 seguinte soma: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n.*/

function mostrarSomaCorreta() {
  let n = parseInt(document.getElementById("valorN").value);
  let soma =  calcularSoma(n)
  window.alert(`O resultado da soma é ${soma}`);
}

function calcularSoma(n) {
    let soma = 0;
    
    for (var i = 1; i <= n; i++) {
      soma += 1 / i;
    }
    return soma.toFixed(2);
}
  
module.exports = {
  calcularSoma: calcularSoma
};

  









