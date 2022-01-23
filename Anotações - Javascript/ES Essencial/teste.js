// let num = [5,2,3,5,8,10]

// function tripleTheChances(chances) {
//     const resultado = []
//     let lenght = chances[0]

//     for (let i = 1; i <= lenght ; i++){
//         let triple = chances[i] * 3
//         console.log(triple)
//         resultado.push(triple)
//     };

//     return console.log(resultado)
// }


// function vezesLetraAparece(frase, letra) {
//     let texto;

//     function filtro(search) { 
//         if(search === letra){
//             return search
//         }
//      }
    
//     texto = frase.toLowerCase().split('').filter(filtro).length;
    
//     return console.log(texto);
// }

// vezesLetraAparece('O Lord of the Ring', 'o')

// let num = [1,2]

// function squareSum(numbers){

//     let squareResult = [];
//     const index = numbers.length;

//     for( let i = 0; i < index; i++) {
//         square = numbers[i] * numbers[i];

//         squareResult.push(square);
//     }
//     result = squareResult.reduce((pValue, cValue) => pValue + cValue);

//     return console.log(result);
//   }

//   squareSum(num);

function Animal(patas) {
    this.qtdePatas = patas; 
}

const cachorro = new Animal(4);

console.log(cachorro.qtdePatas)