/* Faça um programa para calcular n! (Fatorial de n), sendo que o valor inteiro de n é fornecido pelo usuário.
 Sabe-se que: N! = 1 * 2 * 3 * … (n – 1) * n 0! = 1, por definição;  */

 function mostrarFatorial () {
  let numero = parseInt(document.getElementById("numero").value);
  let fatorial = calcularFatorial(numero);
  window.alert(fatorial);
 }

 function calcularFatorial(numero) {

  let result = 1;
  for (let i = 1; i <= numero; i++) {
      result *= i;
  }
  
  return`O fatorial de ${numero} é ${result}`;
  }

  module.exports = {
    calcularFatorial: calcularFatorial,
  };
  