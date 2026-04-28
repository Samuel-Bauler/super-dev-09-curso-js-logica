function exemplo01(){

    let carros = [];
    carros.push("BMW m3"); // índice 0, posição Primeira posição

    carros.push("Byd Seal"); // índice 1, posição Segunda posição

    carros.push("Mobi"); // índice 2, posição Terceira

    carros.push("Chevet"); // índice 3, posição Quarta posição

    carros[3] = "Chevette";

    carros.splice(2, 1); // Apagar o Mobi

    alert("Quantidade de elementos: " + carros.length +
        "\nPrimeiro: " + carros[0] +
        "\nSegundo: " + carros[1] +
        "\nTerceiro: " + carros[2] // Chevette
    );
}
function exemplo02() {
    let alunos = [];
    let frequencias = [];
    let status = []; 

    alunos.push(prompt("Digite o nome do aluno: "));
    frequencias.push(parseInt(prompt("Digite o percentual de frenquencia")));

    alunos.push(prompt("Digite o nome do aluno"));
    frequencias.push(parseInt(prompt("Digite o percentual de frenquencia")));

    if (frequencias[0] >= 70) {
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    if (frequencias[1] >= 70) {
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    alert("Alunos : " + 
        "\nNome: " + alunos[0] +
        "\nFrequencia; " + frequencias[0] +
        "\nStatus: " + status[0] +
        "\nNome: " + alunos[1] +
        "\nFrequencia: " + frequencias[1] +
        "\nStatus: " + status
    );
    

}
