function exemplotoLowerCase() {
    let nome = "John Doe";
    let nomeMinusculo = nome.toLowerCase();

    console.log("Nome minusculo: " + nomeMinusculo)

}

function exemploToUpperCase() {
    let nome = "John Doe";
    let nomeMaisculo = nome.toUpperCase();

    console.log("nome maiusculo" + nomeMaisculo);
}
function exemploTamanho() {
    let nome = "Joh Doe";
    let quantidadeCaracteres = nome.length;

    console.log("texto: '" + nome + "'");
    console.log("quantidade de carcteres: " + quantidadeCaracteres);
}

function exemploSubstituicao() {
    let texto = "Abacate , Uva , Maca , Pera";
    let textoCorrigido = texto.replace("Maca", "Maçã");

    console.log("texto: " + texto);
    console.log("texto Corrigido: " + textoCorrigido);
}
function exemploSubstituicaoNaPropriaVariavel() {
    let texto = prompt("Digite o preço "); // "450.39"
    // "R$ 450,39" => "450.39"
    texto = texto.replace(",", ".");
    texto = texto.replace("R$", "");
    texto = texto.replaceAll(" ", "");

    console.log("texto sanitizado" + texto);

}

function removerEspacosDoFim() {
    let texto = "    o batman vive a noite, de dia ele dorme       ";

    console.log("o texto original: '" + texto + "'");

    texto = texto.trimEnd();
    console.log("o texto sem espaços no fim: '" + texto + "'");

}

function removerEspacosDoComeco() {
    let texto = "    o batman vive a noite, de dia ele dorme       ";

    console.log("o texto original: '" + texto + "'");

    texto = texto.trimStart();
    console.log("O texto sem espaços no começo: '" + texto + "'");
}
function removerEspacosDoComecoFinal() {
    let texto = "    o batman vive a noite, de dia ele dorme       ";

    console.log("O texto original: '" + texto + "'");

    // texto = texto.trimStart().trimEnd();
    texto = texto.trim();

    console.log("O texto sem espaços no começo: '" + texto + "'");
}

function agregarCaracteresFim() {
    let nome = "Paulo C";
    console.log("Nome do Cartão: " + nome.padEnd(20, "*"));
}

function agregarCaracteresComeco() {
    let finalCartaoCredito = "7292";

    console.log("Cartão de crédito: " + finalCartaoCredito.padStart(12, "*"));
}

function verficarSeComecaCom() {
    let texto = prompt("Digite um nome: ")

    // verificar se começa com a letra P
    if (texto.toUpperCase().startsWith("P") === true) {
        alert("Começa com a letra 'p', pois a tem senha secreta");
    } else {
        alert("Não pode entrar na festa");
    }
}
function verificarSeContem() {
    let nomeEpisodio = prompt("digite o nome do episodio");

    //verificar se é a primeira temporada "S01" exemplo "lost S01E04"
    if (nomeEpisodio.includes("S01") === true) {
        alert("Primeira temporada");
    }
    else if (nomeEpisodio.includes("S02") === true)
        alert("Segunda temporada");
    else {
        alert("Ao infinito e além");
    }
}
function verificarSeterminaCom() {
    // verificar se termina com 'chocolate'

    let bolo = prompt("digite o nome do bolo");

    if (bolo.endsWith("chocolate") === true) {
        alert("Boa escolha");
    } else {
        alert("Não coma outro bolo")
    }
}

function pegarPosicao() {
    let fruta = "abacate";
    let primeiroCaracter = Fruta[0];

    console.log("Frutas: " + fruta + "\nPrimeira posição: " + primeiroCaracter);
}

function quebrarString() {
    // String         01234
    let horaMinuto = "20:30"

    let partes = horaMinuto.split(":")
    //             0      1
    // split => ["20" , "30"]

    console.log(partes);

    let hora = partes[0];
    let minuto = partes[1];
    console.log("hora: " + hora);
    console.log("minuto: " + minuto);
}

function exemploPegarParteDaString() {
    let nomeCompleto = "Ruan Costa";

    // Ruan Costa
    // R = 0 (começa aqui)
    // u = 1
    // a = 2
    // n = 3
    //   = 4 (para nesta posição)
    // C = 5 (Começa aqui)
    // o = 6
    // s = 7
    // t = 9
    // a = 9

    let nome = nomeCompleto.slice(0, 4); // "Ruan"
    let sobrenome = nomeCompleto.slice(5, 10);
}
function pegarIndeceDoCaracter() {
    let texto = "Abacate Uva Pera"

    let ultimoIndiceDoEspaco = texto.lastIndexOf(" ");

    let ultimaPalavra = texto.slice(ultimoIndiceDoEspaco + 1, texto.length)
    console.log(texto)
    console.log(ultimaPalavra)
}

function descobrirIndiceDoCaracter() {
    //                  0123456789.....
    let numeroCartao = "3010 2039 2019 2030";

    let indicePrimeiroEspaço = numeroCartao.indexOf(" ");

    let primeiraParteCartao = numeroCartao.slice(0, indicePrimeiroEspaço);

    console.log("Cartão: " + numeroCartao);
    console.log("Primeira parte do Cartão: " + primeiraParteCartao);
}
