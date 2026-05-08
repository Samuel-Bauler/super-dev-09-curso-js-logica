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

function exercicio05() {
    let numeros = [];
    let soma = 0;
    
    for (let i = 1; i <= 4; i += 1) {
        numeros.push(parseInt(prompt("Digite o " + i + "º " + "numero")));
    }
    for (let i = 0; i < 4; i += 1) {
        soma = soma + numeros[i];
    }
    
    let media = soma / 4;
    alert(media)
}
function exercicio06() {
    let numeros = [];

    for (let i = 0; i < 4;i += 1) {
        numeros.push(prompt("Digite o " + (i + 1) + "º " + "produto"));
    }

    for (let i = 0; i < 4;i += 1) {
        alert(numeros[i]);
    }

    numeros[2] = prompt("Digite o novo nome do terceiro produto");

    for (let i = 0; i < 4;i += 1) {
        alert(numeros[i]);
    }
}

function exercicio07() {
    let temperaturas = [];

    for (let i = 0; i < 5; i += 1) {
        temperaturas.push(parseInt(prompt("digite a " + (i + 1) + "º temperatura")));
    }

    let maiorTemperatua = 0;
    for (let i = 0; i < 5; i += 1) {
        if (temperaturas[i] > maiorTemperatua) {
            maiorTemperatua = temperaturas[i];
        }
    }
    alert(maiorTemperatua)
}

function exercicio08() {
    let precos = [];

    for (let i = 0; i < 4;i += 1) {
        precos.push(parseFloat(prompt("digite o " + (i + 1) + "º preço" )));
    }

    let menorPreco = 99999999999999999;
    for (let i = 0; i < 4;i += 1) {
        if (precos[i] < menorPreco) {
            menorPreco = precos[i];
        }
    }
    alert(menorPreco);
}
function exercicio09() {
    let numeros = [];

    for (let i = 0; i < 6; i += 1) {
        numeros.push(parseInt(prompt("Digite o " + (i + 1) + "º " + "numero")));
    }

    let numerosPares = 0;
    for (let i = 0; i < 6; i += 1) {
        if (numeros[i] % 2 === 0) {
            numerosPares++
        }
    }
    alert(numerosPares);
}

function exercicio10() {
    let nomesAlunos = [];

    for (let i = 0; i < 5; i += 1) {
        nomesAlunos.push(prompt("Digite o " + (i + 1) + "º nome"));
    }

    let nomePesquisa = prompt("Digite um nome dessa lista de alunos: ");
    let encontrado = false;

    for (let i = 0; i < 5; i += 1) {
        if (nomesAlunos[i].includes(nomePesquisa)) {
            encontrado = true;
        }
    }
    if (encontrado === true) {
        alert("Aluno encontrado")
    } else {
        alert("Aluno não encontrado")
    }
}