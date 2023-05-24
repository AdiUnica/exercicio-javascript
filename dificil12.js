/* Faça um programa para o cálculo de uma folha de pagamento, 
sabendo que os descontos são do imposto de Renda, que depende do salário 
bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS 
corresponde a 11% do salário bruto, mas não é descontado (é a empresa que deposita.)

O salário líquido corresponde ao salário bruto menos os descontos 
O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

a. Desconto do IR;
b. Salário Bruto ate R$900,00 (inclusive) – Isento;
c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%;
d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%;
e. Salário bruto acima de 2500 – Desconto de 20%.

Imprima na tela as informações, dispostas conforme o exemplo abaixo, 
no exemplo valor da hora é 5 e a quantidade de horas é 220.  

Salário bruto (5 * 220)           : R$   1100,00

( – ) IR (5%)                     : R$     55,00

( – ) INSS ( 10% )                 : R$     110,00

FGTS ( 11%)                       : R$     121,00

Total de descontos                 : R$     165,00

Salário Líquido                   : R$     935,00      */

const PERC_DESCONTO_INSS = 0.1;
const PERC_DESCONTO_FGTS = 0.11;
const PERC_DESCONTO_SINDICATO = 0.03;

const IR_FAIXA_A_SALARIO = 900.00;
const IR_FAIXA_B_SALARIO = 1500.00;
const IR_FAIXA_C_SALARIO = 2500.00;

const IR_FAIXA_A_DESCONTO = 0;
const IR_FAIXA_B_DESCONTO = 0.050;
const IR_FAIXA_C_DESCONTO = 0.1;
const IR_FAIXA_D_DESCONTO = 0.2;

function calcularFolhaPagamento() {
    let valorHora = parseFloat(document.getElementById("valorHora").value);
    let horasTrabalhadas = parseInt(document.getElementById("horasTrabalhadas").value);
    
    let salarioBruto = calcularSalarioBruto(valorHora, horasTrabalhadas);
    let descontoINSS = calcularInss(salarioBruto);
    let descontoSindicato = calcularDescontoSindicato(salarioBruto);
    let fgts = calcularFgts(salarioBruto);
    let porcentagemIR = calcularPercentualDescontoImpostoDeRenda(salarioBruto)
    let descontoImpostoDeRenda = calcularDescontoImpostoDeRenda(salarioBruto, porcentagemIR);
    let totalDescontos = calcularTotalDescontos(descontoINSS, descontoSindicato, descontoImpostoDeRenda);
    let salarioLiquido = calcularSalarioLiquido(salarioBruto, totalDescontos);

    mostrarCalculo(valorHora, horasTrabalhadas, salarioBruto, descontoINSS, fgts, descontoSindicato, porcentagemIR,
        descontoImpostoDeRenda, totalDescontos, salarioLiquido);
}

function calcularSalarioBruto(valorHora, horasTrabalhadas) {
    return valorHora * horasTrabalhadas;
}

function calcularInss(salarioBruto) {
    return salarioBruto * PERC_DESCONTO_INSS
}

function calcularDescontoSindicato(salarioBruto) {
    return salarioBruto * PERC_DESCONTO_SINDICATO;
}

function calcularFgts(salarioBruto) {
    return salarioBruto * PERC_DESCONTO_FGTS;
}

function calcularPercentualDescontoImpostoDeRenda(salarioBruto) {
    let porcentagemIR;

    if (salarioBruto <= IR_FAIXA_A_SALARIO) {
        porcentagemIR = IR_FAIXA_A_DESCONTO;
    } else if (salarioBruto <= IR_FAIXA_B_SALARIO) {
        porcentagemIR = IR_FAIXA_B_DESCONTO;
    } else if (salarioBruto <= IR_FAIXA_C_SALARIO) {
        porcentagemIR = IR_FAIXA_C_DESCONTO;
    } else {
        porcentagemIR = IR_FAIXA_D_DESCONTO;
    }

    return porcentagemIR;

}

function calcularDescontoImpostoDeRenda(salarioBruto, porcentagemIR) {
    return salarioBruto * porcentagemIR;
}

function calcularTotalDescontos(descontoINSS, descontoSindicato, descontoImpostoDeRenda) {
    return descontoINSS + descontoSindicato + descontoImpostoDeRenda;
}

function calcularSalarioLiquido(salarioBruto, totalDescontos) {
    return salarioBruto - totalDescontos;
}

function mostrarCalculo(valorHora, horasTrabalhadas, salarioBruto, descontoINSS, fgts, descontoSindicato,
    porcentagemIR, descontoImpostoDeRenda, totalDescontos, salarioLiquido) {

    let resultado =
    
    `
    Salario Bruto (${valorHora} * ${horasTrabalhadas}): R$ ${salarioBruto.toFixed(2)};
    ( – ) IR (${porcentagemIR * 100}%):  R$ ${descontoImpostoDeRenda.toFixed(2)};
    ( – ) INSS (${PERC_DESCONTO_INSS * 100}%): R$ ${descontoINSS.toFixed(2)};
    ( – ) Sindicato (${PERC_DESCONTO_SINDICATO * 100}%): R$ ${descontoSindicato.toFixed(2)};
    FGTS (${PERC_DESCONTO_FGTS * 100}%): R$ ${fgts.toFixed(2)};
    Total de descontos: R$ ${totalDescontos.toFixed(2)}
    Salário líquido: R$ ${salarioLiquido.toFixed(2)}
    
    `
    window.alert(resultado);
}