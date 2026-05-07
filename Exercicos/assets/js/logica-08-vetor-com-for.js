function exercicio01() {
    let nomes = [];

    for (let i = 1; i <= 3; i += 1) {
        nomes.push(prompt("Digite o " + i + " nome: "))
    }
    let texto = "Nomes cadastrados:\n";
    for(let i = 0; i < nomes.length; i += 1){
        texto = texto + nomes[i] + "\n";
    }
    alert(texto);
}

function exercicio02() {
    let idades = [];

    for (let i = 1; i <= 4; i += 1) {
        idades.push(prompt("Digite a " + i + "º " + "idade: "));
    }

    let texto = "Idades cadastradas:\n";
    for ( let i = 0; i < idades.length; i += 1) {
        texto = texto + idades[i] + "\n";
    }
    alert(texto);
}
function exercicio03() {
    let cidades = [];

    for (let i = 1; i <= 5; i += 1) {
        cidades.push(prompt("Digite o nome da " + i + "º " + "Cidade: "));
    }

    let texto = "Cidades cadastradas:\n";
    for  ( let i = 0; i < cidades.length; i += 1) {
        texto = texto + cidades[i] + "\n";
    }

    alert(texto);
    alert("Numero de cidades registradas: " + cidades.length);
}
function exercicio04() {
    let numeros = [];
    let soma = 0;

    for (let i = 1; i <= 5; i += 1) {
        numeros.push(parseInt(prompt("Digite o " + i + "º " + "numero")));
    }
    
    for ( let i = 0; i < 5; i += 1) {
        soma = soma + numeros[i];
    }
    alert(soma);
}