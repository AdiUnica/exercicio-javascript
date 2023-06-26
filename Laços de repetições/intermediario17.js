/*  Faça um programa que receba a idade e o peso de sete pessoas. Calcule e mostre:

A quantidade de pessoas com mais de 90 quilos;
A média das idades das cinco pessoas;  */

function calcularPessoaseIdade() {
  let pessoas = 5;
  let pesoMais90 = 0;
  let somaIdades = 0;

  for (let i = 1; i <= 5; i++) {
    let idade = parseFloat(document.getElementById("idade" + i).value);
    let peso = parseFloat(document.getElementById("peso" + i).value);
    somaIdades += idade;

    if (peso > 90) {
      pesoMais90++;
    }
  }
  mediaIdades = somaIdades / pessoas;
  mostrarResultado(pesoMais90, mediaIdades);
}

function mostrarResultado(pesoMais90, mediaIdades) {
  let resumoResultado =
   `
    A quantidade de pessoas com mais de 90 quilos: ${pesoMais90};
    A média das idades das cinco pessoas: ${mediaIdades};
    `

  window.alert(resumoResultado);
}
