function contarLetrasNome() {
    let nome = prompt("Digite seu nome:")
    let letrasQtd = nome.length;

    console.log(letrasQtd);
}
function converterParaMaiusculas() {
    let frase = prompt("Digite um frase");
    let fraseM = frase.toUpperCase();

    console.log(fraseM);
}
function converterParaMinusculas() {
    let frase = prompt("Digite um frase");
    let fraseMinu = frase.toLowerCase();

    console.log(fraseMinu);
    
}
function mostrarPrimeiraLetra() {
    let digitarPalavra = prompt("Digite uma palavra: ");

    digitarPalavra = digitarPalavra.trim();

    let primeiraLetra = digitarPalavra[0];

    console.log(primeiraLetra);
}
function mostrarUltimaLetra() {
    let digitarPalavra = prompt("Digite uma palavra: ");

    digitarPalavra = digitarPalavra.trim();

    let ultimaLetra = digitarPalavra[5];

    console.log(ultimaLetra);
}
function verificarPalavraNaFrase() {
    let frase = prompt("Digite um frase");
    let palavra = prompt("digite uma palavra");

    if (frase.includes(palavra) === true) {
        console.log("Essa palavra ta na frase");
    } else {
        console.log("não ta nao chocolate branco");
    }
}
function substituirCorNaFrase() {
    let frase = prompt("Digite um frase");
    let substituirPalavra = prompt("Digite a palavra que quer substituir: ")
    let palavraNova = prompt("Digite a palavra que você quer colocar no lugar: ")

    if (frase.includes(substituirPalavra) === true) {
        let fraseFinal = frase.replace(substituirPalavra , palavraNova)
        console.log(fraseFinal);
    } else {
        console.log("Não existe essa palavra");
    }
}

function trocarEstacao() {
    let frase = "Eu gosto de verão"

    let fraseFinal = frase.replace("verão" , "inverno" )

    console.log(fraseFinal);
}

    