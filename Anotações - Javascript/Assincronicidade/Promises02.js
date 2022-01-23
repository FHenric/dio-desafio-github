//Função sem promises

// function sumNumbers(num1, num2) {
//     let result = num1 + num2;

//     if (result == 2) {
//         sucessCallback();
//     } else {
//         errorCallback();
//     }
// }

// function sucessCallback() {
//     console.log("Isso!! Numero 2!!");
// }

// function errorCallback() {
//     console.log("Opa!! Algo errado ocorreu");
// }

// sumNumbers(2, 1)

//Mesma função com promises

let p = new Promise(
    (resolve, reject) => {
        let a = 1 + 1
        if (a == 2) {
            resolve('Sucesso!!')
        } else {
            reject('Falhou!!')
        }
    }
)

// Para pegar o 'resolve' lá de cima a gente usa o '.then' e chama uma arrow function com o console.log contendo a mensagem que voce quer + o que está contido no resolve()

p.then((message) => {
    console.log('This is in the then ' + message)
})

// Para pegar o 'reject' é preciso usar o '.catch' e chamar uma arrow fx com o log da mensagem de erro que quiser + a mensagem de rejeição contida no reject()

    .catch((err) => {
        console.log('This is the catch ' + err)
    })