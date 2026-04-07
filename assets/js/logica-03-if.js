function exemploBasico() {
    let numero = 2;

    // se o número é igual 1 faço alguma coisa
    if (numero === 1) {
        alert("um")
    } else {
        alert("outro número")
    }
}

function exemploBasico02() {
    let idade = parseInt(prompt("Digite sua idade: "));

    if (idade < 18) { 
        alert("Menor de idade");
    } else if(idade < 60) {
        alert("adulto");
    } else {
        alert("Idoso");
    }
}

function exemploBasico03() {
    let numero = parseInt(prompt("informe um número"));
    
    if (numero < 0) {
        alert("Número negativo")
    } else if (numero > 0 ) {
        alert("Numero positivo")
    } else {
        alert("numero neutro")
    }
}

function exemploProduto(){
  // Produtos:
  // Maçã 0.80, Pera 1.20, Laranja 2.50, Banana 2.00
  // Senão for nenhuma das opções encerra a execução
  let produto = prompt('Digite o nome do produto');
  let quantidade = parseInt(prompt('Digite a quantidade'));

  let precoUnitario = 0;

  if (produto === "Maçã"){
    precoUnitario = 0.80;
  } else if(produto === "Pera"){
    precoUnitario = 1.20;
  } else if(produto === "Laranja"){
    precoUnitario = 2.50;
  } else if(produto === "Banana"){
    precoUnitario = 2.0;
  } else { // caso o produto não seja um produto válido
    // apresentar uma mensagem de feedback
    alert("Produto não cadastrado");
    // encerrar a execução da função
    return;
  }

    let total = quantidade * precoUnitario;

    alert("Produto: " + produto +
        "\nQuantidade: " + quantidade +
        "\nPreço Unitário: R$" + precoUnitario.toFixed(2) +
        "\nTotal: R$" + total.toFixed(2));
}

// escopo da variável é global
let regular = 0; // 1 => 2
let bom = 0;
let otimo = 0;

function avaliarRegular() {
  // Incrementando a variável regular em 1
  regular = regular + 1;
}

function avaliarBom() {
  bom = bom + 1;
}

function avaliarOtimo() {
  otimo = otimo + 1;
}

function finalizarAvaliacao() {
  alert("Avaliações: \n  Regular: " + regular + "\n  Bom: " + bom + "\n  Ótimo: " + otimo);

  regular = 0;
  bom = 0;
  otimo = 0;
}