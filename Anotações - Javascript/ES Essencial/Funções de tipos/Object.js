let user = {
    name: 'Filipe'
}

//Alterando propriedades
user.name = 'Janaina';
// console.log(user)
user['name'] = 'Vem cuboga na linguiça!'
// console.log(user)

const prop = 'name';
user[prop] = 'Roberval';


//criando uma propriedade
user.lastName = 'da Silva'

//deletando uma propriedade
delete user.lastName
console.log(user)
