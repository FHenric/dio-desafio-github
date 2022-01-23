//o objeto 'user' não é modificado ao executar a função 'userWithFullName', mas na verdade é criado um novo objeto
//com as modificações feitas pela função. Isso permite que o objeto 'user' possa ser utilizada por outra função 
//logo na sequencia, de forma que não seja necessário criar um novo objeto para fazer uma outra modificação
const user = {
    name: 'Filipe',
    lastName: 'Henrique da Silva Castro'
};

function fullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = fullName(user);

console.log(userWithFullName)