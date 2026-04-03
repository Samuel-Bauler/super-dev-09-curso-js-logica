function exercicio01() {
    let nome = "Arthur Morgan";
    let nasc = "1980";
    let anoatual = 2026;
    let idade = anoatual - nasc;

    alert(nome + "\n" + idade);

    let altura = 1.80;
    let peso = 80;
    let imc = peso / (altura*altura);
    
    alert("O imc dele é: " + imc.toFixed(2));

    let categoria = "Fora da Lei";
    let valorjob = 100 ; 
    let qtdjobday = 5;
    let qtdjobsemana = qtdjobday * 7 ;
    let qtdjobmes = qtdjobsemana * 4 ;
    let qtdjobyear = qtdjobmes * 12 ; 

    let calcularjobday = qtdjobday * valorjob;
    let calcularjobsemana = qtdjobsemana * valorjob;
    let calcularjobmes = qtdjobmes * valorjob;
    let calcularjobyear = qtdjobyear * valorjob;

    alert(
        "A categoria dele é: " + categoria + "\n" + 
        "Ele ganha por dia: " + calcularjobday + "\n" +
        "Ele ganha por semana: " + calcularjobsemana + "\n " +
        "Ele ganha por mês: " + calcularjobmes + "\n" +
        "Ele ganha por ano: " + calcularjobyear
    );

}
function exercicio02() {
    let nome = "Anderzyon Zyllva de asseveddo"
    
    alert(nome);
;
    let nota1 = 7;
    let nota2 = 1;
    let nota3 = 8;
    let nota4 = 4;

    alert(
        "1 nota: " + nota1 + "\n " + 
        "2 nota: " + nota2 + "\n" +
        "3 nota: " + nota3 + "\n" +
        "4 nota: " + nota4 + "\n" 
    );

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert("A média dele é: " + media)
}

function exercicio03() {
    let nomeproduto = "Pc da Nasa oliginal";
    let precoproduto = 100;
    let qtd = 5;
    let desconto = 10;

    let calcularqtd= precoproduto * qtd;

    let calculardescontopc = precoproduto - (precoproduto * desconto) / 100;
    let descontopcs = calcularqtd - calculardescontopc;
    
    alert(
        "Nome do Produto: " + nomeproduto + "\n" +
        "Preço do Produto: " + precoproduto + "\n" +
        "Quantidade do Produto: " + qtd + "\n" +
        "Desconto: " + desconto + "\n" +
        "Produtos sem Desconto: " + calcularqtd + "\n" +
        "Produtos com Desconto: " + descontopcs
    );
}

function exercicio04() {
    let namecar = "chevette shark";
    let anocar = "1968";
    let maxspeed = 400;
    let tempoviagem = 16;

    let calculardistancia = maxspeed * tempoviagem;

    alert(
        "Carro: " + namecar + "\n" +
        "Ano: " + anocar + "\n" +  
        "A Distância é de: " + calculardistancia + " " + "km");
}

function exercicio05() {
    let nomecidade = "Franciscolandia";
    let populacao = 20.000;
    let area = 100.000;

    let calculard = populacao / area ;

    alert(
        "Nome da Cidade: " + nomecidade + "\n" + 
        "População: " + populacao + " " + "habitantes" + "\n" + 
        "Área: " + area + "\n" +
        "Densidade demográfica: " + calculard
    );
}

function exercicio06() {

    let nomeFilme = "livro de Eli"
    let duracao = 160;
    let classificacao = "12 anos";
    let vezesAssistido = 3;

    alert(
        "Nome do filme: " + nomeFilme + "\n" +
        "Duração: " + duracao + " minutos\n" +
        "Classificação: " + classificacao + "\n" +
        "Assistido: " + vezesAssistido + " vezes"
    );
}

function exercicio07() {

    let nomefuncionario = "Carlos";
    let salariobase = 2000;
    let horasextras = 10;
    let valorhoraextra = 20;

    let totalhorasextras = horasextras * valorhoraextra;
    let salarioFinal = salariobase + totalhorasextras;

     alert(
        "Funcionário: " + nomefuncionario + "\n" +
        "Salário base: R$ " + salariobase + "\n" +
        "Horas extras: R$ " + totalhorasextras + "\n" +
        "Salário final: R$ " + salarioFinal
    );
}


