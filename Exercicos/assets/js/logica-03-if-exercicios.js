function exercicio1() {
    let nome = prompt("Digite seu nome: ");
    let idade = parseInt(prompt("Digite sua idade: "));

    if (idade <= 17 ) {
        alert("criança");
    } else {
        alert("adulto");
    }
}

function exercicio2() {
    let num = parseInt(prompt("Digite um número"));

    if (num < 10) {
        alert("Menor que 10");
    } else {
        alert("Maior que 10");
    }
}
function exercicio3() {
    let num = parseInt(prompt("Digite um numero"));

    if (num === 0 ) {
        alert("É zero");
    } else { 
        alert("não é zero")
    }
}

function exercicio4() {
    let num = parseInt(prompt("Digite um numero"));

    if (num === 8001) {
        alert("É 8001");
    } else {
        alert("É diferente de 8001");
    }
}
function exercicio5() {
    let num1 = parseInt(prompt("digite um numero"));
    let num2 = parseInt(prompt("Digite outro numero"));

    let soma = num1 + num2; 

    if (soma < 0 ) {
        alert("Seu numero é negativo");
    } else {
        alert("seu número é positivo")
    }
}

function exercicio6() {
    let compra1 = parseInt(prompt("Digite o valor da primeira compra: "));
    let compra2 = parseInt(prompt("Digite o valor da segunda compra: "));
    let compra3 = parseInt(prompt("Digite o valor da terceita compra: "));

    let total = compra1 + compra2 + compra3;

    if (total <= 100) {
        alert("você pode comprar");
    } else {
        alert("Você não pode")
    }
}
function exercicio7() {
    let idade = parseInt(prompt("digite sua idade: "));

    if (idade < 16) {
        alert("não pode votar") ; 
    } else if ((idade === 16) && (idade === 17)) {
        alert("Voto opcional");
    } else if (idade >= 18) {
        alert("Voto obrigatório")
    } else if ((idade < 0) && (idade >= 115)) {
        alert("Você não é um ser humano")
    }
}

function exercicio8() {
    let num = parseInt(prompt("digite um numero: "));

    if (num < 0) {
        alert("negativo");
    } else if (num > 0) {
        alert("Positivo");
    } else {
        alert("0");
    }
}
function exercicio9() {
    let num1 = parseInt(prompt("digite um numero"));
    let num2 = parseInt(prompt("digite outro numero"));

    if (num1 > num2) {
        alert("numero 1 é maior");
    } else if (num1 < num2) {
        alert("numero 2 é maior");
    } else {
        alert("eles são iguais");
    }
}
function exercicio10() {
    let num = parseInt(prompt("Digite um numero:"));

    if ((num < 10) && (num > 20)) {
        alert("ele não está entre 10 e 20")
    } else {
        alert("ele está")
    }
}
function exercicio11(){
    let num1 = parseInt(prompt("Digite um numero:"));

    if (num1 < 0) {
            alert("Negativo");
    } else {
        alert("positivo")
    }

    let num2 = parseInt(prompt("Digite outro numero:"));

    if (num2 < 0) {
        alert("Negativo");
    } else {
        alert("positivo")
    }

    let num3 = parseInt(prompt("Digite outro numero:"));

    if (num3 < 0) {
        alert("Negativo");
    } else {
        alert("positivo")
    }


}

function exercicio12() {
    let usuario = prompt("Digite seu usuário: ")
    let senha = parseInt(prompt("Digite sua Senha: "))

    if ((usuario === "admin") && (senha === 1234)) {
        alert("login correto");
    } else {
        alert("login incorreto");
    }   
}
function exercicio13() {
    let num = parseInt(prompt("Digite um numero:"));

    if (num % 2 === 1 ) {
        alert("Impar")
    } else {
        alert("Par")
    }
}

function exercicio14() {
    let salario = parseInt(prompt("Qual seu salario"));

    if (salario < 2000) {
        alert("baixo");
    } else if ((salario > 2000) && (salario < 5000)) {
        alert("Medio")
    } else {
        alert("alto")
    }
}
function exercicio15() {
    let temperatura = parseFloat(prompt("qual é a temperatura"))

    if (temperatura < 15 ) {
        alert("frio");
    } else if (( temperatura > 15) && (temperatura < 25)) {
        alert("agradevel")
    } else {
        alert("quente")
    }
}
function exercicio16() {
    let num1 = parseInt(prompt("digite um numero: "));
    let num2 = parseInt(prompt("digite outro numero: "));

    if (num1 / num2 === 0) {
        alert("eles são multiplos")
    } else {
        alert("não é")
    }
}

function exercicio17() {
    let nota1 = parseFloat(prompt("Digite 1 nota"))
    let nota2 = parseFloat(prompt("Digite 2 nota"))
    let nota3 = parseFloat(prompt("Digite 3 nota"))

    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        alert("aprovado")
    } else if ((media < 5 ) && (media > 6.9)) {
        alert("recuperação")
    } else {
        alert("reprovado")
    }
}

function exercicio18() {
    let idade = parseInt(prompt("digite sua idade: "));
    let renda = parseFloat(prompt("Digite sua renda "));

    if ((idade >= 18) && (renda >= 2000)) {
        alert("Aprovado para crédito")
    } else {
        alert("Não aprovado")
    }
}
function exercicio19() {
    let horas = parseFloat(prompt("que horas são: "))

    if ((horas > 0) && (horas < 11)){
        alert("Bom dia");
    } else if ((horas > 11) && (horas < 17)) {
        alert("boa tarde");
    } else if ((horas > 17) && (horas < 23)) {
        alert ("boa noite");
    } else ("hora invalidade")
}

//tem fazer bagulho ainda pq né tem que né gurizao 

function exercicio20() {
    let num1 = parseInt(prompt("digite um numero: "));
    let num2 = parseInt(prompt("digite outro numero: "));

    let soma = num1 + num2;
    let menos = num1 - num2;
    let multiplica = num1 * num2;
    let dividir = num1 / num2;

    let operacao = prompt("Oq você deseja?" + "\nSoma:" + "\nSubtração" + "\nMultiplicação:" + "\nDivisão:")

    if (operacao === "Soma" ) {
        alert(soma)
    } else if (operacao === "Subtração") {
        alert(menos)
    } else if (operacao === "Multiplicação") {
        alert(multiplica)
    } else if (operacao === "Divisão") {
        alert(dividir)
    } else {
        alert("operação invalida")
    }
}
function exercicio21() {
    let x = parseInt(prompt("Digite um numero:"));
    let y = parseInt(prompt("Digite outro numero:"));
    let z = parseInt(prompt("Digite outro numero:"));

    if (x > y)
}
