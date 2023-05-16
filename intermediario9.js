/*  Faça um programa que leia três números e mostre-os em ordem decrescente. */


function mostrarOrdemDecrescente() {
    var numeros = [];
      for (var i = 1; i <= 3; i++) {
        var numero = parseInt(document.getElementById("numero" + i).value);
        numeros.push(numero);
      }
      numeros.sort(function(a, b) {
        return b - a;
      });
      var numerosOrdenados = numeros.join(", ");
     
      window.alert(numerosOrdenados);
    }
    