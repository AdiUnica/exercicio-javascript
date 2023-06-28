/*  Faça um programa que pergunte em que turno você estuda.
 Peça para digitar M-matutino ou V-vespertino ou N-noturno.
  Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso.  */

  function mostrarOsTurno() {
    let turno = document.getElementById("turno").value;
    turno = turno.toUpperCase();
    let osturnos = verificarTurno(turno)
    window.alert(osturnos);
    
  }

function verificarTurno(turno) {
    
    if (turno === "M") {
      return "Bom dia!";
    } else if (turno === "V") {
        return"Boa tarde!";
    } else if (turno === "N") {  
        return"Boa noite!";
    } else {
        return"Valor inválido!";
    }
}
module.exports = {
    verificarTurno: verificarTurno, 
};
  
