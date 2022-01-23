const user = {
    name: 'Filipe Henrique',
    lastName: 'da Silva Castro'
};

//Recupera as chaves do objeto
//console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
//console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
//console.log('\nLista de propriedades e valores', Object.entries(user))

//Mergear propriedades de objetos
Object.assign(user, {fullName: `${user.name} ${user.lastName}`})

// console.log(user)
// console.log('Novo objeto mergeando mergeando o objeto afim ', Object.assign({}, user, {age: 21}));

//Previne todas as alterações de um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj)

newObj.foo = 'dido'
delete newObj.foo;
newObj.bar = 'foo';

//console.log(newObj)

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'filipe'}
Object.seal(person)

person.name = 'Jenoveva';
delete person.name;
person.age = 21;

console.log(person)