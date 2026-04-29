function exercicio01MostrarNumeros() {
    for (let indice = 1; indice < 6; indice++) {
        console.log(indice);
    }
}
function exercicio02MostrarNomeVariasVezes() {
    let nome = prompt("digite seu nome: ")
    for (let indice = 0; indice < 4; indice++) {
        console.log(nome);
    }
}
function exercicio03ContarAteDez() {
    for (let indice = 0; indice < 11; indice++)
        console.log(indice);
}
function exercicio04ContarRegressivo() {
    for (let indice = 5; indice > 0; indice = indice - 1) {
        console.log(indice);
    }
}
function exercicio05SomarNumeros() {
    let soma = 0;
    for (let indice = 0; indice < 6; indice = indice + 1) {
        soma = soma + indice;
    }
    console.log(soma);
}
function exercicio06MostrarNumerosPares() {
    for (indice = 0; indice < 11; indice++) {
        if (indice % 2 === 0) {
            console.log(indice);
        }
    }
}
function exercicio07MostrarNumerosImpares() {
    for (indice = 1; indice < 10; indice++) {
        if (indice % 2 != 0) {
            console.log(indice);
        }
    }
}
function exercicio08SolicitarTresNomes() {
    for (let indice = 0; indice < 3; indice++) {
        let nome = prompt("Digite o nome: ")
        console.log("Nome " + nome)
    }
}
function exercicio09SomarTresIdades() {
    for (let indice = 0; indice < 3; indice++) {
        let idade = parseInt(prompt("Digite " + " " + (indice + 1) + "sua idade: "));
        soma = soma + idade;
        console.log(soma);
    }
}
function exercicio10CalcularMediaSimples() {
    let soma = 0;
    for (let indice = 0; indice < 4; indice++) {
        let nota = parseFloat(prompt("Digite a suas notas: "));
        soma = soma + nota;
    }
    let media = soma / 4;
    console.log(media);
}
function exercicio11ContarMaioresDeIdade() {
    for (let indice = 0; indice < 5; indice++) {
        let idade = parseInt(prompt("digite sua idade:"))
        if (idade >= 18) {
            console.log(idade);
        }
    }
}
function exercicio12MostrarTabuada() {
    let num = parseInt(prompt("Digite um numero: "));
    for (let indice = 1; indice < 11; indice++) {
        let tabuada = num * indice;
        console.log(tabuada);
    }
}
function exercicio14MaiorNumero() {
    let maiorNumero = 0;
    for (let indice = 0; indice < 5; indice++) {
        let numero = parseInt(prompt("Digite um número: "));
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }
    console.log(maiorNumero);
}
function exercicio15MenorNumero() {
    let menorNumero = Infinity;
    for (let indice = 0; indice < 5; indice++) {
        let numero = parseInt(prompt("Digite um número"));
        if (numero < menorNumero) {
            menorNumero = numero;
        }
    }
    console.log(menorNumero);
}
function exercicio16ContarPositivos() {
    for (let indice = 0; indice < 6; indice++) {
        let numero = parseInt(prompt("digite um número: "));
        if (numero > 0) {
            console.log(numero);
        }
    }
}
function exercicio17SomarPares() {
    let somaPares = 0;
    for (let indice = 0; indice < 5; indice++) {
        let numero = parseInt(prompt("Digite o número: "))

        if (numero % 2 === 0) {
            somaPares = somaPares + numero;
        }
    }
    console.log(somaPares);
}
function exercicio18MostrarMultiplosDeTres() {
    let multiplosDeTres = 0;
    for (let indice = 0; indice < 30; indice++) {
        if (indice % 3 === 0) {
            console.log(indice)
        }
    }
}

function exercicio19CadastrarProdutos() {
    for (let indice = 0; indice < 3; indice++) {
        let nome = prompt("Digite o nome do produto: ")
    }
    console.log("Produtos cadastrados com sucesso");
}

function exercicio20RelatorioSimples() {
    let somaIdades = 0;

    for (let indice = 0; indice < 3; indice++) {
        let nome = prompt("Digite seu nome: ");
        let idade = parseInt(prompt("Digite sua idade: "));
        somaIdades = somaIdades + idade
        console.log(nome + ", Idade: " + idade)
    }
    let media = somaIdades / 3;
    console.log("Média das idade: " + media.toFixed(2));
    console.log("Pessoas cadastradas: " + indice);

}
function exercicio21MostrarNumerosParesIntervalo() {
    let numeroInicio = parseInt(prompt("digite o numero inicial: "))
    let numeroFinal = parseInt(prompt("digite o numero Final: "))
    for (let indice = numeroInicio; numeroInicio < numeroFinal; numeroInicio++) {
        if (numeroInicio % 2 === 0) {
            console.log(numeroInicio);
        }
    }
}
function exercicio22SomarNumerosIntervalo() {
    let numeroInicio = parseInt(prompt("digite o numero inicial: "));
    let numeroFinal = parseInt(prompt("digite o numero Final: "));

    for (let indice = numeroInicio; numeroInicio < numeroFinal; numeroInicio++) {
        somaNumeros = somaNumeros + numeroInicio;
        console.log(somaNumeros);
    }
}
function exercicio23ContarNumerosNegativos() {
    for (let indice = 0; indice < 6; indice++) {
        let numero = parseInt(prompt("Digite um numero: "));
        if (numero < 0) {
            console.log(numero);
        }
    }
}
function exercicio24CalcularMediaAlturas() {
    let somaAltura = 0;
    let mediaAltura = 0;
    for (let indice = 0; indice < 5; indice++) {
        let altura = parseFloat(prompt("Digite sua altura: "));
        somaAltura = somaAltura + altura;
    }
    mediaAltura = somaAltura / indice;
    console.log(mediaAltura);
}
function exercicio25ContarNotasAcimaSete() {
    for (let indice = 0; indice < 8; indice++) {
        let nota = parseFloat(prompt("digite a sua nota: "));
        if (nota >= 7) {
            console.log(nota)
        }
    }
}
function exercicio26MaiorEMenorNumero() {
    let maiorNumero = 0;
    let menorNumero = Infinity;
    for (let indice = 0; indice < 7; indice++) {
        let numero = parseInt(prompt("digite um numero: "));

        if (numero > maiorNumero) {
            maiorNumero = numero;
        }

        if (numero < menorNumero) {
            menorNumero = numero;
        }
    }
    console.log(maiorNumero + " " + " " + menorNumero)
}
function exercicio27SomarIdadesMaioresDeIdade() {
    let somaIdade = 0;
    for (let indice = 0; indice < 7; indice++) {
        let nome = prompt("Digite seu nome: ");
        let idade = parseInt(prompt("Digite sua idade: "));

        if (idade >= 18) {
            somaIdade = somaIdade + idade
        }
    }
    console.log(somaIdade);
}
function exercicio28ContarHomensEMulheres() {
    let quantidadeMasculino = 0;
    let quantidadeFeminino = 0;
    for (let indice = 0; indice < 6; indice++) {
        let nome = prompt("Digite seu nome: ").trim();
        let sexo = prompt("Digite sua sexo: [ M / F ]").trim().toUpperCase();

        if ((sexo !== "m") || (sexo !== "f")) {
            sexo = prompt("Digite corretamente: [ M / F ]").trim().toUpperCase();
        }
        if (sexo === "m") {
            quantidadeMasculino = quantidadeMasculino + 1;
        } else {
            quantidadeFeminino = quantidadeFeminino + 1;
        }
    }
    console.log("Homens: " + + quantidadeMasculino + "\n" + "Mulheres: " + quantidadeFeminino);

}
function exercicio29ValidarNota() {
    let somaNotas = 0;
    let mediaNotas = 0;
    for (let indice = 0; indice < 5; indice++) {
        let nota = parseFloat(prompt("Digite a sua nota: "))
        while ((nota < 0) || (nota > 10)) {
            nota = parseFloat(prompt("Nota inválida. Digite a nota correta: "))
        }
        somaNotas = somaNotas + nota;
        mediaNotas = somaNotas / 5;
    }
    console.log(mediaNotas);
}
function exercicio30TabuadasCompletas() {
    let numeroFinal = 5;
    for (numeroInicial = 1; numeroInicial <= numeroFinal; numeroInicial = numeroInicial + 1) {
        console.log("Tabuada do: " + numeroInicial);

        for (let i = 1; i <= 10; i = i + 1) {
            let tabuada = numeroInicial * i;
            console.log(numeroInicial + " x " + i + " = " + tabuada)
        }
    }
}
function exercicio31ContarAprovadosReprovados() {
    let contadorAprovado = 0, contadorReprovado = 0;

    for (i = 0; i < 6; i = i + 1) {
        let nome = prompt("Digite seu nome: ");
        let nota = parseFloat(prompt("Digite sua nota: "))

        while ((nota < 0) || (nota > 10)) {
            nota = parseInt(prompt("Nota incorreta. Digite a nota correta: "));
        }

        if (nota >= 7) {
            contadorAprovado = contadorAprovado + 1;
        } else {
            contadorReprovado = contadorReprovado + 1;
        }
    }
    console.log("Aprovado: " + contadorAprovado + "\n" + "Reprovado: " + contadorReprovado);
}
function exercicio32SomarValoresPositivos() {
    let soma = 0;
    for (let i = 0; i < 8; i = i + 1) {
        let numero = parseInt(prompt("DIgite um numero: "));

        if (numero > 0) {
            soma = soma + numero;
        }
    }
    console.log("Soma dos números positivos apenas: " + soma);
}
function exercicio33EncontrarNomeMaisLongo() {
    let maiorNome = "";
    for (i = 0; i < 5; i = i + 1) {
        let nome = prompt("Digite seu nome: ")
        if (nome.length > maiorNome.length) {
            maiorNome = nome
        }
    }
    console.log(maiorNome);
}
function exercicio34CalcularFatorial() {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado = numero * (i - 1) ;
    }
    console.log(numero + "!" + " = " + resultado)

}
function exercicio35ContagemRegressivaPersonalizada() {
    let numero = parseInt(prompt("digite um numero: "));

    for (let i = numero; i >= 0; i = i - 1) {
        console.log(i);
    }
}
function exercicio36ContarNotasEmFaixas() {
    let contador0a4 = 0;
    let contador5a6 = 0;
    let contador7a8 = 0;
    let contador9a10 = 0;

    for (let i = 0; i < 8; i = i + 1) {
        let nota = parseFloat(prompt("digite a nota: "));

        while ((nota < 0) || (nota > 10)) {
            nota = parseFloat(prompt("nota invalida. Digite a nota: "));
        }

        if ((nota > 0) && (nota <= 4)) {
            contador0a4 = contador0a4 + 1;
        } else if ((nota >= 5) && (nota <= 6)) {
            contador5a6 = contador5a6 + 1;
        } else if ((nota >= 7) && (nota <= 8)) {
            contador7a8 = contador7a8 + 1;
        } else {
            contador9a10 = contador9a10 + 1;
        }

    }
    console.log("Notas de 0 a 4:", contador0a4);
    console.log("Notas de 5 a 6:", contador5a6);
    console.log("Notas de 7 a 8:", contador7a8);
    console.log("Notas de 9 a 10:", contador9a10);
}
function exercicio37SomarMultiplosDeDoisETres() {
    let numero = parseInt(prompt("Digite um numero: "));
    let soma = 0;
    for (let i = 1; i < numero; i = i + 1) {

        if ((i % 2 === 0) || (i % 2 !== 0)) {
            soma = soma + i;
        }
    }
    console.log(soma);
}
/* for (let i = 1; i <= numero; i++) {
    // Verifica se é múltiplo de 2 OU de 3
    if (i % 2 === 0 || i % 3 === 0) {
    soma = soma + i;
    }
} */
function exercicio38CalcularMediaComValidacao() {
    let maiorQueSete = 0, menorQueSete = 0, soma = 0;

    for (let i = 0; i < 6; i = i + 1) {
        let nota = parseFloat(prompt("Digite a nota: "));

        while ((nota < 0) || (nota > 10)) {
            nota = parseFloat(prompt("Nota invalida. Digite ela corretamente: "));
        }

        if (nota > 7) {
            maiorQueSete = maiorQueSete + 1;
        } else {
            menorQueSete = menorQueSete + 1;
        }

        soma = soma + nota;
    }
    let media = soma / 6;

    console.log("Média:", media);
    console.log("Notas acima de 7:", maiorQueSete);
    console.log("Notas abaixo ou igual a 7:", menorQueSete);
}
function exercicio39ContarParesEImparesDigitados() {
    let contadorPares = 0, contadorImpares = 0, soma = 0;

    for (let i = 0; i < 10; i = i + 1) {
        let numero = parseInt(prompt("Digite um numero: "));

        if (numero % 2 === 0) {
            contadorPares = contadorPares + 1;
        } else if (numero % 2 !== 0) {
            contadorImpares = contadorImpares + 1;
        }
        soma = soma + numero
    }
    console.log("Quantidade de pares:", contadorPares);
    console.log("Quantidade de ímpares:", contadorImpares);
    console.log("Soma de todos os números:", soma);
}
function exercicio40RelatorioCompletoTurmaSemVetor() { // aluno cadastrados.
    let media = 0,nota1 = 0,nota2 = 0,  maiorMedia = 0, menorMedia = 99999999999;
    let alunosReprovados = 0, alunosAprovados = 0,alunoMaiorMedia = "",alunoMenorMedia = "";

    for (let i = 0; i < 3; i = i + 1) {
        let nome = prompt("Digite seu nome: ").trim();
        while ((nome.length < 2) || (nome.length > 80)) {
            nome = prompt("Nome incorreto. Deve conter no min 2 caractes e max 20:")
        }

        let nota1 = parseInt(prompt("Digite sua 1 nota: "))
        while ((nota1 < 0) || (nota1 > 10))  {
            nota1 = parseInt(prompt("Nota incorreta. Digite-a corretamente. "));
        }   

        let nota2 = parseInt(prompt("Digite sua 2 nota: "));
        while ((nota2 < 0) || (nota2 > 10))  {
            nota2 = parseInt(prompt("Nota incorreta. Digite-a corretamente. "));
        }   

        media = (nota1 + nota2) / 2;
        
        if (media > 7) {
            alunosAprovados = alunosAprovados + 1;
        } else {
            alunosReprovados = alunosReprovados + 1;
        }

        if (media > maiorMedia) {
            maiorMedia = media;
            alunoMaiorMedia = nome;
        } 
        if (media < menorMedia) {
            menorMedia = media;

        }
    }
    console.log(
        "--- RELATÓRIO DA TURMA ---" +
        "\na) Alunos cadastrados: " + 3 +
        "\nb) Aprovados: " + alunosAprovados +
        "\nc) Reprovados: " + alunosReprovados +
        "\nd) Maior média: " + maiorMedia +
        "\ne) Menor média: " + menorMedia +
        "\nf) Aluno com maior média: " + alunoMaiorMedia
    );
}
function exercicio41ForTabuadaIntervalo() {
    let numero1 = parseInt(prompt("Digite um numero: "))
    let numero2 = parseInt(prompt("Digite outro numero: "))
    
    for (let i = numero1; numero1 <= numero2; numero1 = numero1 + 1) {
        console.log("Tabuada do: " + numero1);
        
        for (let i = 1; i <= 10; i = i + 1) {
            let tabuada = numero1 * i;
            console.log(numero1 + " x " + i + " = " + tabuada)
        }
            
    }
}
function exercicio42ForContarDivisores() {
    let numero = parseInt(prompt("Digite um número: "));
    let contadorDivisores = 0;

    for (let i = 0; i <= numero; i = i + 1 ) {
        if (numero % i === 0) {
            contadorDivisores = contadorDivisores + 1;
        }
    }
    console.log(contadorDivisores);
}

function exercicio43ForVerificarPrimo() {
    let numero = parseInt(prompt("Digite um número: "));
    let contadoresPrimo = 0;

    for (let i = 0; i <= numero; i = i + 1) {
        if ( numero % i === 0) {
            contadoresPrimo = contadoresPrimo + 1;
        } 
    }
    if ( contadoresPrimo === 2) {
        console.log("Numero Primo");
    } else {
        console.log("Não primo");
    }
}



    


