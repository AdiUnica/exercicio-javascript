/* Para doar sangue é necessário ter entre 18 e 67 anos. Faça um aplicativo que pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&).*/


function verificarIdadeParaDoar() {

    let idade = (document.getElementById("idade").value);
   

    if (idade >= 18 && idade <= 67) {
        window.alert("Pode doar");
    } else {
        window.alert("Não pode doar");
    }
}
   


