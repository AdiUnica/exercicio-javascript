/*  Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de
 pessoas com idade maior ou igual a 18 anos.*/

function contadorDeIdade() {
    let quantidadePessoasMaiorIgual18Anos = 0

    for (let i = 1; i <= 10; i++) {
        let idade = parseFloat(document.getElementById("idade" + i).value);

        if (idade >= 18) {
            quantidadePessoasMaiorIgual18Anos++;
        }
    }

    alert(`Quantidade de pessoas com 18 anos ou mais: ${quantidadePessoasMaiorIgual18Anos}`)
}

