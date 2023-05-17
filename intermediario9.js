/*  Faça um programa que leia três números e mostre-os em ordem decrescente. */


function mostrarOrdemDecrescente() {

  var numero1 = parseInt(document.getElementById("numero1").value);
  var numero2 = parseInt(document.getElementById("numero2").value);
  var numero3 = parseInt(document.getElementById("numero3").value)
  
  var numerosOrdenados = ordernarDecrescente(numero1, numero2, numero3);

  console.log(numerosOrdenados);
  window.alert(numerosOrdenados);
}

function ordernarDecrescente(numero1, numero2, numero3) {
  
  var numeros = [numero1, numero2, numero3];

  numeros.sort(function (a, b) {
    return b - a;
  });

  return numeros.join(", ");
}