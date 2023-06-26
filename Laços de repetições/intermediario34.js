/* Foi feita uma pesquisa entre os habitantes de uma região. Foram coletados os dados de idade,
 sexo (M/F) e salário. Faça um programa que calcule e mostre:  

A média dos salários do grupo;
A maior e a menor idade do grupo;
A quantidade de mulheres com salário até R$ 200,00;
A idade e o sexo da pessoa que possui o menor salário.
Finalize a entrada de dados ao ser digitada uma idade negativa.  */


var dadosPesquisa = [];

function CalcularSalarioIdadeSexo() {
  let idade = parseInt(document.getElementById("idade").value);
  let sexo = document.getElementById("sexo").value;
  let salario = parseFloat(document.getElementById("salario").value);

  if (idade < 0) {
    processarDadosPesquisa();
  } else {
    let novaPessoaEntrevista = {
      idade: idade,
      sexo: sexo,
      salario: salario,
    };

    dadosPesquisa.push(novaPessoaEntrevista);

    limparTela();
  }
}

function limparTela() {
  document.getElementById("idade").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("salario").value = "";
}

function processarDadosPesquisa() {
  let totalSalarios = 0;
  let mediaSalarios = 0;
  let maiorIdade = 0;
  let menorIdade = 0;
  let qtdMulheresSalarioBaixo = 0;
  let menorSalario = 0;
  let pessoaMenorSalario = "";

  for (let i = 0; i < dadosPesquisa.length; i++) {
    let pessoaPesquisa = dadosPesquisa[i];

    let idade = pessoaPesquisa.idade;
    let sexo = pessoaPesquisa.sexo;
    let salario = pessoaPesquisa.salario;

    totalSalarios += salario;

    if (idade > maiorIdade) {
      maiorIdade = idade;
    }

    if (menorIdade === 0 || idade < menorIdade) {
      menorIdade = idade;
    }

    if (sexo === "F" && salario <= 200) {
      qtdMulheresSalarioBaixo++;
    }

    if (menorSalario === 0 || salario < menorSalario) {
      menorSalario = salario;
      pessoaMenorSalario = pessoaPesquisa;
    }
  }

  mediaSalarios = totalSalarios / dadosPesquisa.length;

  mostrarResultado(mediaSalarios, maiorIdade, menorIdade, qtdMulheresSalarioBaixo, pessoaMenorSalario);
}

function mostrarResultado(mediaSalarios, maiorIdade, menorIdade, qtdMulheresSalarioBaixo, pessoaMenorSalario) {
  let resumoResultado = `
   Média dos salários: R$ ${mediaSalarios.toFixed(2)};
   Maior idade: ${maiorIdade};
   Menor idade: ${menorIdade};
   Quantidade de mulheres com salário até R$ 200,00: ${qtdMulheresSalarioBaixo};
   Idade e sexo da pessoa com menor salário: ${pessoaMenorSalario.idade} - ${pessoaMenorSalario.sexo};
    `;
  window.alert(resumoResultado);
}
