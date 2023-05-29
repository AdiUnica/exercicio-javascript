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

const ALCOOL = 'A';
const GASOLINA = 'G';

const PERC_DESC_A_ATE_20_LITROS = 0.03;
const PERC_DESC_A_ACIMA_20_LITROS = 0.05;

const PERC_DESC_G_ATE_20_LITROS = 0.04;
const PERC_DESC_G_ACIMA_20_LITROS = 0.06;

const VALOR_LITROS_A = 4;
const VALOR_LITROS_G = 5;



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
  if (combustivel === ALCOOL) {
    if (litros <= 20) {
      return PERC_DESC_A_ATE_20_LITROS;
    } else {
      return PERC_DESC_A_ACIMA_20_LITROS;
    }
  }


  if (combustivel === GASOLINA) {
    if (litros <= 20) {
      return PERC_DESC_G_ATE_20_LITROS;
    } else {
      return PERC_DESC_G_ACIMA_20_LITROS;
    }
  }
}


  function calcularValorTotalSemDesconto(litros, combustivel) {

    if (combustivel === 'A') {
      return litros * VALOR_LITROS_A;
    }

    if (combustivel === 'G') {
      return litros * VALOR_LITROS_G;
    }
  }


  function calcularValorTotalComDescontro(valorSemDesconto, percentualDesconto) {

    return valorSemDesconto - (valorSemDesconto * percentualDesconto);

  }

  function mostrarResultado(valorComDesconto) {
    let resultado = `Valor a  ser pago  igual a R$ ${valorComDesconto.toFixed(2)}`;
    alert(resultado);
  }