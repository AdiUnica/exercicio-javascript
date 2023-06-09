/* Faça um programa que receba a idade de 10 pessoas e que calcule e mostre:
a) A quantidade de pessoas em cada faixa etária;
b) A percentagem de pessoas na primeira e na última faixa etária, com relação ao total de pessoas: 

Até 15 anos
De 16 a 30 anos
De 31 a 45 anos
De 46 a 60 anos
Acima de 61 anos*/

function calcularfaixaEtariaDeIdade() {
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let faixa4 = 0;
    let faixa5 = 0;

    for (let i = 1; i <= 10; i++) {
        let idade = parseFloat(document.getElementById("idade" + i).value);
        if (idade <= 15) {
            faixa1++;
        } else if (idade > 15 && idade <= 30) {
            faixa2++;
        } else if (idade > 30 && idade <= 45) {
            faixa3++;
        } else if (idade > 45 && idade <= 61) {
            faixa4++;
        } else {
            faixa5++;
        }
    }
    
    let percentualFaixa1 = calcularPercentual(faixa1);

    let percentualFaixa5 = calcularPercentual(faixa5);

    mostrarResultado(faixa1, faixa2, faixa3, faixa4, faixa5, percentualFaixa1, percentualFaixa5);

}

function calcularPercentual(numeroPessoasDaFaixa) {
    let totalPessoas = 10;
    return (numeroPessoasDaFaixa / totalPessoas) * 100;
}

function mostrarResultado(faixa1, faixa2, faixa3, faixa4, faixa5, percentualFaixa1, percentualFaixa5) {

    let resumoResultado =
        `
        Quantidade
        Até 15 anos:  ${faixa1};
        De 16 a 30 anos:  ${faixa2};
        De 31 a 45 anos:  ${faixa3};
        De 46 a 60 anos:  ${faixa4};
        Acima de 61 anos:  ${faixa5};
        
        Percentual
        Até 15 anos: ${percentualFaixa1.toFixed(2)}%;
        Acima de 61 anos: ${percentualFaixa5.toFixed(2)}%;
    `
    window.alert(resumoResultado);
}


