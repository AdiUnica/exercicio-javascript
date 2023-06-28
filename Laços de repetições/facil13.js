/*  Faça um Programa que leia um número e exiba o dia correspondente da semana. (1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido) */


function verificarDiaDaSemana() {
    let numero = parseInt(document.getElementById("numero").value);
    let diaDaSemana = mostrarDiaDaSemana(numero);
    window.alert(diaDaSemana);
 }

function mostrarDiaDaSemana(numero) {
   
    if (numero === 1) {
        return "Hoje é domingo!";
    } 
    if (numero === 2) {
        return "Hoje é segunda!";
    }
    if (numero === 3) {
        return "Hoje é terça!";
    }
    if (numero === 4) {
        return "Hoje é quarta!";
    }
    if (numero === 5) {
        return "Hoje é quinta!";
    }
    if (numero === 6) {
        return "Hoje é sexta!";
    } 
    if (numero === 7) {
        return "Hoje é sábado!";
    } 
    return "Valor inválido!";
}

module.exports = {
    mostrarDiaDaSemana: mostrarDiaDaSemana  
};