/* Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B 
(faturamento = 54000).<
  Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.*/

let faturamentos = [];

function cadastroDeClientes() {
  
  let clientes = [];
  for (let i = 1; i <=5; i++) {
    let nome = document.getElementById("nome" + i).value;
    let valor = parseFloat(document.getElementById("numero" + i).value);

      clientes.push(
      {
        "id" : i,
        "nome" : nome,
        "valor" : valor
      }
    );
  }

  alert(clientes);
}