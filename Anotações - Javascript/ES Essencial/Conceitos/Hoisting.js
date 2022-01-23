// Forma de se ler ou executar uma função ou variável antes dela ser declarada

//VARIÁVEL

//Forma correta
num = 6;
console.log(num);
var num; // perceba que só a declaração como variavel foi passada após a execução dela

//Forma incorreta
var num2;
console.log(num2); // retorna undefined
num2 = 6; // se passar o valor após a utilização da variável nao funciona, por questão de lógica e leitura do código

//FUNÇÃO

meet('Filipe', '21');

function meet(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos!!`)
}