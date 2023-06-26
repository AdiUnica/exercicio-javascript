/* Faça um programa para calcular n! (Fatorial de n), sendo que o valor inteiro de n é fornecido pelo usuário.
 Sabe-se que: N! = 1 * 2 * 3 * … (n – 1) * n 0! = 1, por definição;  */

 function calcularFatorial() {
    let numero = parseInt(document.getElementById("numero").value);
  
  let result = 1;
  for (let i = 1; i <= numero; i++) {
      result *= i;
  }
  
  window.alert(`O fatorial de ${numero} é ${result}.`);
  
  }
  