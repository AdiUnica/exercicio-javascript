/*  Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-vespertino ou N-noturno. Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso.  */

  

function verificarTurno() {
    var turno = document.getElementById("turno").value;
    turno = turno.toUpperCase();
  
   
    if (turno === "M") {
      window.alert("Bom dia!");
    } else if (turno === "V") {
        window.alert("Boa tarde!");
    } else if (turno === "N") {  
        window.alert("Boa noite!");
    } else {
        window.alert("Valor inválido!");
    }
   
  
  }
