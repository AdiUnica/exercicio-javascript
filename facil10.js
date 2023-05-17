/*  Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-vespertino ou N-noturno. Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso.  */

 

function verificarTurno() {
    var turno = document.getElementById("turno").value;
    turno = turno.toUpperCase();
  
    var mensagem = "";
    if (turno === "M") {
      window.alert(mensagem = "Bom dia!");
    } else if (turno === "V") {
        window.alert(mensagem = "Boa tarde!");
    } else if (turno === "N") {  
        window.alert(mensagem = "Boa noite!");
    } else {
        window.alert(mensagem = "Valor inválido!");
    }
     window.alert(mensagem);
  
  }
  