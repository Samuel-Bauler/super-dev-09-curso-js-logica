function exemplo01SolicitarDadosMedicos() {
    let indice = 0;
    let nome = "";
    let crm = "";

    while (indice < 5) {
        let nome = prompt("Nome do medico: ");
        let crm = prompt("Digite o seu CRM")

        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("Nome inváilido, deve conter no minino 2 caracteres e no maximo 20." +
                "\n digite seu nome: "
            ).trim();
        }
        while ((crm.length < 2) || (crm.length > 20)) {
            crm = prompt("CRM é invalido, deve conter no minino 2 caracteres e no maximo 20." +
                "\n digite seu nome: "
            ).trim();
        }
        indice = indice + 1
    }
    alert("Obrigado por utilizar nosso sistema Hospitalar")
}

function solicitarDadosPaciente() {
    let indice = 0;

    while (indice < 3) {
        let nome = prompt("Digite seu nome: ");
        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("Nome inválido. Digite seu nome: ");
        }

        let idade = parseInt(prompt("Digite sua idade: "));
        while ((idade) < 0 || (idade > 120)) {
            idade = parseInt(prompt("Idade inválida. Digite sua idade: "));
        }

        indice = indice + 1;
    }

    alert(indice + " " + "é a quantidade de pessoas cadastradas:")

}




