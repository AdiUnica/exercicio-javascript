/* As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.  

a. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
b. Salários até R$ 280,00 (incluindo): aumento de 20%;
c. Salários entre R$ 280,00 e R$700,00: aumento de 15%;
d. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%;
e. Salários de R$ 1500,00 em diante: aumento de 5%
Após o aumento ser realizado; informe na tela;

a. O salário antes do reajuste;
b. O percentual de aumento aplicado;
c. O valor do aumento;
d. O novo salário, após o aumento.  */




function calcularReajusteDeSalario() {

    let salario = parseFloat(document.getElementById("salario").value);
    let percentualAumento = calcularPercentualDeAumento(salario);
    let novoSalario = calcularSalario(salario, percentualAumento);
    let valorAumento = novoSalario - salario;

    mostrarCalculo(salario, percentualAumento, valorAumento, novoSalario);   

}

function mostrarCalculo(salario, percentualAumento, valorAumento, novoSalario) {
    
    let resultado = 
    `
    Seu salário antes do aumento era de: R$ ${salario.toFixed(2)}
    Seu aumento foi de ${percentualAumento} %
    O valor do seu aumento é de: R$ ${valorAumento.toFixed(2)}
    O seu novo salário é: R$ ${novoSalario.toFixed(2)}
    `
    window.alert(resultado);
}

function calcularSalario(salario, percentualAumento) {
    return salario + (salario * (percentualAumento / 100));
}

function calcularPercentualDeAumento(salario) {

    let percentualAumento;

    if (salario <= 280) {
        percentualAumento = 20;
    } else if (salario <= 700) {
        percentualAumento = 15;
    } else if (salario <= 1500) {
        percentualAumento = 10;
    } else {
        percentualAumento = 5;
    }

    return percentualAumento;
}