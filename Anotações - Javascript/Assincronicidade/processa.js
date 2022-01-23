const fs = require('fs')

console.log(1)

// function callback(err, contents){
//     console.log(contents)
// }
// //fs é uma biblioteca com componentes assincronos, na hora de ler tudo, vai aparecer no final, não interferindo na sequencia normal de leitura do código
// fs.readFile('./in1.txt', callback)

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err){
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

readFile('./in1.txt')
.then(contents => {
    console.log(contents)
})

console.log(2)
console.log(3)