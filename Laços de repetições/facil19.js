/* Faça um programa que receba dez números e usando laços de repetição
  calcule e mostre a quantidade  de números entre 30 e 90. */ 


function calcularNumeros() {
  let quantidade = 0;

  for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(document.getElementById("numero" + i).value);

    if (numero >= 30 && numero <= 90) {
      quantidade++;
    }
  }
  mostrarResultado(quantidade);
 
}
function mostrarResultado(quantidade) {
  window.alert(`A quantidade de números entre 30 e 90 é: ${quantidade}`);
}
