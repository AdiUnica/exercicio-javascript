/*Faça um programa que recebe a altura de um triangulo
 em um número inteiro e imprima-o utilizando asteriscos. Veja o Exemplo:

Entrada: 5

*
**
***
****
***** */

function desenharTriangulo() {
  let altura = parseInt(document.getElementById("altura").value);
  let triangulo = "";

  for (let i = 1; i <= altura; i++) {
    triangulo += "*".repeat(i) + "\n";
  }

  mostrarResultado(triangulo);
}

function mostrarResultado(triangulo) {
    window.alert(triangulo);
}
