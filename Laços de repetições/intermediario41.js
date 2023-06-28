/*  Faça um programa que receba a idade e a altura de várias pessoas 
e que calcule e mostre a média das alturas das pessoas com mais de 50 anos. Para encerrar a entrada 
de dados digite idade menor ou igual a zero.    */ 

var pessoas = [];

function adicionarPessoas() {
  let idade = parseInt(document.getElementById("idade").value);
  let altura = parseFloat(document.getElementById("altura").value);
  
  if (idade <= 0) {
    return;
  }

  pessoas.push({ idade: idade, altura: altura });

  document.getElementById("idade").value = "";
  document.getElementById("altura").value = "";

  limparTela();
}

function limparTela() {
  document.getElementById("idade").value = "";
  document.getElementById("altura").value = "";
}

function calcularMediaAltura() {
  let totalAltura = 0;
  let contagem = 0;

  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 50) {
      totalAltura += pessoas[i].altura;
      contagem++;
    }
  }

  let mediaAltura = contagem > 0 ? totalAltura / contagem : 0;
  mostrarResultado(mediaAltura);
}

function mostrarResultado(mediaAltura) {
  let resumoResultado = `A média das alturas das pessoas com mais de 50 anos é ${mediaAltura.toFixed(2)} metros.`;
  
  window.alert(resumoResultado);
}
