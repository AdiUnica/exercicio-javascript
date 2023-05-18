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


function calcularFolhaPagamento() {
    var valorHora = parseFloat(document.getElementById("valorHora").value);
    var horasTrabalhadas = parseInt(document.getElementById("horasTrabalhadas").value);

    var salarioBruto = valorHora * horasTrabalhadas;
    var descontoINSS = salarioBruto * PERC_DESCONTO_INSS;
    var fgts = salarioBruto * 0.11;
    var descontoSindicato = salarioBruto * 0.03;


    var descontoImpostoDeRenda;
    if (salarioBruto <= 900.00) {
        descontoImpostoDeRenda = 0;
    } else if (salarioBruto <= 1500.00) {
        descontoImpostoDeRenda = salarioBruto * 0.050;
    } else if (salarioBruto <= 2500.00) {
        descontoImpostoDeRenda = salarioBruto * 0.1;
    } else {
        descontoImpostoDeRenda = salarioBruto * 0.2;
    }


    var totalDescontos = descontoImpostoDeRenda + descontoINSS + descontoSindicato;
    var salarioLiquido = salarioBruto - totalDescontos


    window.alert("Salário bruto (" + valorHora + " * " + horasTrabalhadas + "): R$ " + salarioBruto.toFixed(2));
    window.alert("( - ) IR (" + (descontoImpostoDeRenda / 100).toFixed(1) + "%) : " + "R$ " + descontoImpostoDeRenda.toFixed(2));
    window.alert("( - ) INSS (10%): R$ " + descontoINSS.toFixed(2));
    window.alert("( - ) SINDICATO (3%): R$ " + descontoSindicato.toFixed(2));
    window.alert("FGTS (11 %): R$ " + fgts.toFixed(2));
    window.alert("Total de descontos: R$ " + totalDescontos.toFixed(2))
    window.alert("Salário líquido: R$ " + salarioLiquido.toFixed(2))

}










