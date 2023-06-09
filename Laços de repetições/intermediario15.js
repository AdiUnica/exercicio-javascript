/* Uma loja utiliza o código V para transação à vista e P para transação a prazo.
 Faça um programa que receba código e valor de 5 transações usando laços de repetição.
  Calcule e mostre:  
O valor total das compras à vista
O valor total das compras a prazo c.   
O valor total das compras efetuadas
O valor da primeira prestação das compras a prazo, sabendo-se que essas serão pagas
 em três vezes Intermediário*/



function calcularCompras() {
    let valorTotalAvista = 0;
    let valortotalAprazo = 0;
    let valorTotal = 0;
    let valorDaprimeiraPrestacao = 0;

    for (let i = 1; i <= 5; i++) {
        let codigo = (document.getElementById("codigo" + i).value);
        codigo = codigo.toUpperCase();
        let valor = parseFloat(document.getElementById("valor" + i).value);
        
        if (codigo === "V") {
            valorTotalAvista += valor;
        } else if (codigo === "P") {
            valortotalAprazo += valor;
        }
        valorTotal += valor;
    }

    if (valortotalAprazo > 0) {
        valorDaprimeiraPrestacao = valortotalAprazo / 3;
    }



    mostrarResultado(valorTotalAvista, valortotalAprazo, valorTotal, valorDaprimeiraPrestacao);
}

function mostrarResultado(valorTotalAvista, valortotalAprazo, valorTotal, valorDaprimeiraPrestacao) {
    let resumoResultado =

        `
            Valor total das compras à vista: R$ ${valorTotalAvista.toFixed(2)};
            Valor total das compras a prazo: R$ ${valortotalAprazo.toFixed(2)};
            Valor total das compras efetuadas: R$ ${valorTotal.toFixed(2)};
            Valor da primeira prestação das compras a prazo: R$ ${valorDaprimeiraPrestacao.toFixed(2)};
        `
    window.alert(resumoResultado);
}
