/* Para doar sangue é necessário ter entre 18 e 67 anos. 
Faça um aplicativo que pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. 
Use alguns dos operadores lógicos OU (||) e E (&&).*/

function mostrarIdadeParaDoarSangue() {

    let idade = (document.getElementById("idade").value); 
    let idadeParaDoarSangue = verificarIdadeParaDoar(idade)
    window.alert(idadeParaDoarSangue);
}


function verificarIdadeParaDoarSangue(idade) {
    if (idade >= 18 && idade <= 67) {
        return "Pode doar";
    } else {
        return ("Não pode doar");
    }
}

module.exports = {
    verificarIdadeParaDoarSangue: verificarIdadeParaDoarSangue
  };
   


