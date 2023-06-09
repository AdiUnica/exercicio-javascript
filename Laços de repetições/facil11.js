/* Escreva um aplicativo que recebe inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.*/

function numerosPareImpares() {
    let numero = parseInt(document.getElementById("numero").value);

    let numerosPares = "";
    let numerosImpares = "";

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            numerosPares += i + " ";
        } else {
            numerosImpares += i + " ";
        }

    }

    mostrarResultado(numerosPares, numerosImpares);
}

function mostrarResultado(numerosPares, numerosImpares ) {
    let resumoResultado =
        `
        Números Pares: ${numerosPares};
        Números Ímpares: ${numerosImpares};
    `
    window.alert(resumoResultado);
}
