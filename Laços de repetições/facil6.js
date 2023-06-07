/* Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B 
(faturamento = 54000).<
  Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.*/

function cadastroDeClientes() {
  
  let valorTotal = 0;
  for (let i = 1; i <=5; i++) {
   
    let valor = parseFloat(document.getElementById("numero" + i).value);

    valorTotal = valorTotal + valor; //valorTotal += valor
  }

  if (valorTotal > 54000) {
    alert(`
    valor total = ${valorTotal}
    valor superado = ${valorTotal - 54000}`);
    
    
  }
}
