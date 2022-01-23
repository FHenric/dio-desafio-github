//como tipo primitivo, não podemos alterar uma constante
const name = 'Filipe';

// name = 'Letícia'; Não pode
// console.log(name)

//Não podemos mudar um objeto como todo.
const user = {
    name: 'João'
};
console.log(user);

//Maaaaas, podemos modificar alguma propriedade desse objeto
user.name = 'Letícia';

console.log(user);
//veja isso nos 2 primeiros consoles

//Ainda assim, não é permitido modificar a const user como um todo, ou seja, não podemos aponta-lo novamente.
/* user = {
    name: 'Constantina'
} */

//O mesmo vale pra Arrays

const pessoas = ['jão', 'maira', 'predo'];

//podemos adicionar novos itens
pessoas.push('josicleia');

//podemos remover itens
pessoas.shift();

//podemos altera-lo de forma direta
pessoas[0] = 'elisangela';

//só não podemos apota-lo para outro array 
//pessoas = ['apolinário', 'genésio']

console.log(pessoas)
