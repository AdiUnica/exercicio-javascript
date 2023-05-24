/* Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina 
ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:  

Média de aproveitamento        Conceito 

Entre 9.0 e 10.0 A

Entre 7.5 e 9.0   B

Entre 6.0 e 7.5                                C

Entre 4.0 e 6.0                                D

Entre 4.0 e 0                                   E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a 
mensagem “APROVADO” se o conceito for A, B ou C “REPROVADO” se o conceito for D ou E. */


function verificarResultado() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    if (validarNota(nota1) && validarNota(nota2)) {
        let media = calcularMedia(nota1, nota2);
        let conceito = calcularConceito(media);
        let resultado = calcularResultado(conceito);

        mostrarResultado(nota1, nota2, media, conceito, resultado);
    }

    window.alert("Notas inválidas");
}

function validarNota(nota) {
    if (nota && !isNaN(nota) && nota >= 0 && nota <= 10) {
        return true;
    }
    return false;
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function calcularConceito(media) {
    if (media >= 9.0 && media <= 10.0) {
        return "A";
    } else if (media >= 7.5 && media < 9.0) {
        return "B";
    } else if (media >= 6.0 && media < 7.5) {
        return "C";
    } else if (media >= 4.0 && media < 6.0) {
        return "D";
    } else {
        return "E";
    }
}

function calcularResultado(conceito) {
    if (conceito === "A" || conceito === "B" || conceito === "C") {
        return "APROVADO";
    } else {
        return "REPROVADO";
    }
}

function mostrarResultado(nota1, nota2, media, conceito, resultado) {

    let resumoResultado =
        `
    Notas: ${nota1}, ${nota2};
    A media é: ${media.toFixed(2)};
    O conceito é: ${conceito};
    Resultado: ${resultado};
    `
    window.alert(resumoResultado);
}