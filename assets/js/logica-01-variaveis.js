function exemploMensagem(){
    alert("Hello World minha primeira mensagem Erick")
}
function exemploString(){
    // Criando a variável
    let nome = "Elias";
    let sobrenome = "Otto com Dois T";

    // Alterar o valor da variável sobrenome
    sobrenome = "Otto";

    //Apresentando a variável
    alert(nome)
    alert(sobrenome);
}

function exemploStringConcatenacao(){
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    //Concatenação: juntar um string(texto) com algum outra coisa

    // "Sabão em pó" + " " => "Sabão em pó "
    // "Sabão em pó " + "Omo" => "Sabão em pó Omo"
    let texto = nomeProduto + " " + marcaProduto;
    alert(texto);
}

function exemploNumeroInteiro(){
    let produto = "PC Gamer da Xuxa";
    let quantidadePcs = 16;

    let quantidadeMemoriaPorPC = 8;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPC;
    // "\n" serve para quebrar a linha
    alert(
        "Produto: " + produto +
        "\nQuantidade de pcs: " + quantidadePcs +
        "\nMemória Ram por PC: " + quantidadeMemoriaPorPC + "GB"+
        "\nTotal de GB dos PCs: " + totalGb + "GB");
}

function exemploFloat(){
    let endereco = "Rua XV de Novembro"; 
    let largura = 12.20;
    let comprimento = 45.50; 
    let metroQuadrado = largura * comprimento;

    alert("M² do terreno: " + metroQuadrado + "m²");
}

function exemploBoolean(){
    //Quando entra na empresa
    let tenhoFeriasVencidas = false

    //completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Férias vencidas? " + tenhoFeriasVencidas);
}