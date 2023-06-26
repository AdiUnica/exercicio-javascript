/* Escreva um programa que lê o tamanho do lado de um quadrado e imprime
 um quadrado daquele tamanho com asteriscos. Seu programa deve usar laços
 de repetição e funcionar para quadrados com lados de todos os tamanhos entre 1 e 20.

Por exemplo, para lado igual a 5:
*****
*****
*****
*****
*****  */

function imprimirQuadrado() {
    let lado = parseInt(document.getElementById("lado").value);
  
    let quadrado = "";
  
    if (lado >= 1 && lado <= 20) {
      for (let i = 0; i < lado; i++) {
        quadrado += "*".repeat(lado) + "\n";
      }
    }
    mostrarResultado(quadrado);
  }
  
  function mostrarResultado(quadrado) {
    window.alert(quadrado);
  }
  
