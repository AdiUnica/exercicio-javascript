/* Um posto está vendendo combustíveis com a seguinte tabela de descontos: 
  Álcool:

Litro = 4

Até 20 litros: desconto de 3% por litro
Acima de 20 litros: Desconto de 5% por litro

Gasolina:

Litro = 5

Até 20 litros: desconto de 4% por litro
Acima de 20 litros, desconto de 6% por litro
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível 
(codificado da seguinte forma: A-álcool. G-gasolina), calcule e imprima o valor a ser pago pelo cliente.*/

function verificarPrecoDeCombustivel() {

  let litrosTela = parseFloat(document.getElementById('litros').value);
  let combustivelTela = document.getElementById('combustivel').value;
  combustivelTela = combustivelTela.toUpperCase();

  let percentuarDesconto = calcularPercentualDescontoCombustivel(litrosTela, combustivelTela);
  console.log(percentuarDesconto);

  let valorSemDesconto = calcularValorTotalSemDesconto(litrosTela, combustivelTela);
  console.log(valorSemDesconto);

  let valorComDesconto = calcularValorTotalComDescontro(valorSemDesconto, percentuarDesconto);
  console.log(valorComDesconto);

  mostrarResultado(valorComDesconto);

}

function calcularPercentualDescontoCombustivel(litros, combustivel) {

  if (combustivel === 'A') {
    if (litros <= 20) {
      return 0.03;
    } else {
      return 0.05;
    }
  }

  if (combustivel === 'G') {
    if (litros <= 20) {
      return 0.04;
    } else {
      return 0.06;
    }
  }
}


function calcularValorTotalSemDesconto(litros, combustivel) {

  if (combustivel === 'A') {
    return litros * 4;
  }

  if (combustivel === 'G') {
    return litros * 5;
  }
}


function calcularValorTotalComDescontro(valorSemDesconto, percentualDesconto) {

  return valorSemDesconto - (valorSemDesconto * percentualDesconto);

}

function mostrarResultado(valorComDesconto) {
  let resultado = `Valor a  ser pago  igual a R$ ${valorComDesconto.toFixed(2)}`;
  alert(resultado);
}