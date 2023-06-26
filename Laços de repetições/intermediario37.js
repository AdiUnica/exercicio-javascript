/*  37- Faça um programa que receba vários números e que calcule e mostre:  

A quantidade de números inferiores a 35;
A média dos números positivos;
A percentagem de números entre 50 e 100 entre todos os números digitados;
A percentagem de números entre 10 e 20 entre os números menores que 50. */

var listaDeNumeros = [];

function calcularNumeros() {
  let numero = parseFloat(document.getElementById("numero").value);

  if (numero < 0) {
    processarlistaDeNumeros();
  } else {
    
    listaDeNumeros.push(numero);

    limparTela();
  }
}

function limparTela() {
  document.getElementById("numero").value = "";
}

function processarlistaDeNumeros() {

  let quantidadeInferiores35 = 0;
  let somaPositivos = 0;
  let quantidadePositivos = 0;
  let quantidadeEntre50e100 = 0;
  let quantidadeEntre10e20MenorQue50 = 0;
  let quantidadeMenorQue50 = 0;
  let quantidadeNumeros = listaDeNumeros.length;

  for (let i = 0; i <= listaDeNumeros.length; i++) {
    let numero = listaDeNumeros[i];

    if (numero < 35) {
      quantidadeInferiores35++;
    }

    if (numero > 0) {
      somaPositivos += numero;
      quantidadePositivos++;

     
      if (numero >= 50 && numero <= 100) {
        quantidadeEntre50e100++;
      }
    }

    if (numero >= 10 && numero <= 20 && numero < 50) {
      quantidadeEntre10e20MenorQue50++;
    }

    if (numero < 50) {
      quantidadeMenorQue50++;
    }
  }

  const mediaPositivos = somaPositivos / quantidadePositivos;
  const porcentagemEntre50e100 = (quantidadeEntre50e100 / quantidadeNumeros) * 100;
  const porcentagemEntre10e20MenorQue50 = (quantidadeEntre10e20MenorQue50 / quantidadeMenorQue50) * 100;

  mostrarResultado(quantidadeInferiores35, mediaPositivos, porcentagemEntre50e100, porcentagemEntre10e20MenorQue50);

}

function mostrarResultado(quantidadeInferiores35,  mediaPositivos, porcentagemEntre50e100, porcentagemEntre10e20MenorQue50) {

  let resumoResultado = 
  `
    A quantidade de números inferiores a 35: ${quantidadeInferiores35};
    A média dos números positivos: ${mediaPositivos};
    A proporção de números entre 50 e 100 entre todos os números digitados: ${porcentagemEntre50e100}%;
    A dimensão de números entre 10 e 20 entre os números menores que 50: ${porcentagemEntre10e20MenorQue50}%;
  `;

  window.alert(resumoResultado);
}
