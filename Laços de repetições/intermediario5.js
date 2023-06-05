/* Faça um programa que leia três valores (A, B, C) e mostre-os na ordem lida.  Em seguida, mostre-os em ordem crescente e decrescente.*/


function leiaValores() {
  let valorA = parseFloat(document.getElementById('valorA').value);
  let valorB = parseFloat(document.getElementById('valorB').value);
  let valorC = parseFloat(document.getElementById('valorC').value);

  let valoresLidos = valorA + ', ' + valorB + ', ' + valorC;
  //document.getElementById('valoresLidos').innerHTML = valoresLidos;
  mostrarResultado('valoresLidos', valoresLidos);

  let valoresCrescentes = [valorA, valorB, valorC];
  valoresCrescentes.sort(function (a, b) {
    return a - b;
  });
  //document.getElementById('valoresCrescentes').innerHTML = valoresCrescentes.join(', ');
  mostrarResultado('valoresCrescentes', valoresCrescentes.join(', '));

  let valoresDecrescentes = [valorA, valorB, valorC];
  valoresDecrescentes.sort(function (a, b) {
    return b - a;
  });
  //document.getElementById('valoresDecrescentes').innerHTML = valoresDecrescentes.join(', ');
  mostrarResultado('valoresDecrescentes', valoresDecrescentes.join(', '));
}

function mostrarResultado(elemento, valor) {
  document.getElementById(elemento).innerHTML = valor;
}
