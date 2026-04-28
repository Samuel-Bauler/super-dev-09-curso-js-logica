function exercicio01() {
    let perfumes = [];

    perfumes.push("Armani Acqua Di Giò Parfum"); 

    perfumes.push("Carolina Herrera 212 VIP Black Eau de Parfum "); 

    perfumes.push("Armani Acqua Di Giò Eau de Toilette"); 

    perfumes.push("Carolina Herrera 212 Men Eau de Toilette"); 

    perfumes[1] = "Herrera Carol 313 Classe White Uea de parfum";

    perfumes.push("Perfume 5151")

    perfumes.splice(0 , 1) 

    console.log("1 perfume: " + perfumes[0]);
    console.log("2 perfume: " + perfumes[1]);
    console.log("3 perfume: " + perfumes[2]);
    console.log("4 perfume: " + perfumes[3]);
}

function exercicio02() { // errado fazer isso  para cada usuario
    let materias = [];
    let cargaHoraria = [];
    let valoresHora = [];

    materias.push("Matemática" , "Fisica" , "Química");
    cargaHoraria.push(300 , 350 , 300)
    valoresHora.push(50.25 , 70.25 , 50.25)

    materias[1] = "Biologia";
    cargaHoraria[0] = 310;

    console.log(materias[0] , materias[1] , materias[2]);
    console.log(cargaHoraria[0] , cargaHoraria[1] , cargaHoraria[2]);
    console.log(valoresHora[0] , valoresHora[1] , valoresHora[2]);
}
function exercicio03() {
    let destinosTuristicos = [];

    destinosTuristicos.push(prompt("Digite o nome de um ponto Turistico: "));
    destinosTuristicos.push(prompt("Digite o nome de um ponto Turistico: "));
    destinosTuristicos.push(prompt("Digite o nome de um ponto Turistico: "));
    destinosTuristicos.push(prompt("Digite o nome de um ponto Turistico: "));

    console.log(destinosTuristicos[0] , destinosTuristicos[1] , destinosTuristicos[2] , destinosTuristicos[3]);

    destinosTuristicos[1] = prompt("Digite um novo nome de ponto turistico: ");

    destinosTuristicos.push(prompt("Digite o nome de outro ponto Turistico: "));

    destinosTuristicos.splice(0 , 1);

    console.log(destinosTuristicos[0] , destinosTuristicos[1] , destinosTuristicos[2] , destinosTuristicos[3]);
}
function exercicio04() {
    let restaurantes = [];
    let cidades = [];
    let valoresMedios = [];

    restaurantes.push(prompt("Digite do restaurante"));
    cidades.push(prompt("Onde fica? ( localização ) "));
    valoresMedios.push(parseInt(prompt("Qual valor médio por pessoa? ")));

    restaurantes.push(prompt("Digite do restaurante"));
    cidades.push(prompt("Onde fica? ( localização ) "));
    valoresMedios.push(parseInt(prompt("Qual valor médio por pessoa? ")));

    restaurantes.push(prompt("Digite do restaurante"));
    cidades.push(prompt("Onde fica? ( localização ) "));
    valoresMedios.push(parseInt(prompt("Qual valor médio por pessoa? ")));
    
    console.log("Restaurantes:", [0] , restaurantes[1], restaurantes[2]);
    console.log("Cidades:", cidades[0] , cidades[1], cidades[2]);
    console.log("Valores médios:", valoresMedios[0] , valoresMedios[1], valoresMedios[2]);

    restaurantes[0] = prompt("DIgite o novo nome do primeiro restaurante: ")
    valoresMedios[2] = parseInt(prompt("DIgite o novo valorMedio do terceiro restaurante:"));

    console.log("Restaurantes:"+ "1: " +  restaurantes[0] , restaurantes[1], restaurantes[2]);
    console.log("Cidades:", cidades[0] , cidades[1], cidades[2]);
    console.log("Valores médios:", valoresMedios[0] , valoresMedios[1], valoresMedios[2]);

} 

function exercicio05() {
    let filmes = [];
    let generos = [];
    let duracoesMinutos = [];
    let duracoesHoras = [];

    filmes.push(prompt("Digite o nome do primeiro filme: "));
    generos.push(prompt("Digite o genero do primeiro filme: "));
    duracoesMinutos.push(prompt("Digite a duração em minutos: "));
    duracoesHoras.push(prompt("Digite a duração em minutos: "))

    filmes.push(prompt("Digite o nome do segundo filme: "));
    generos.push(prompt("Digite o genero do segundo filme: "));
    duracoesMinutos.push(prompt("Digite a duração em minutos: "));
    duracoesHoras.push(prompt("Digite a duração em minutos: "))

    filmes.push(prompt("Digite o nome do terceiro filme: "));
    generos.push(prompt("Digite o genero do terceiro filme: "));
    duracoesMinutos.push(prompt("Digite a duração em minutos: "));
    duracoesHoras.push(prompt("Digite a duração em minutos: "))

    filmes.push(prompt("Digite o nome do terceiro filme: "));
    generos.push(prompt("Digite o genero do terceiro filme: "));
    duracoesMinutos.push(prompt("Digite a duração em minutos: "));
    duracoesHoras.push(prompt("Digite a duração em minutos: "))

}
