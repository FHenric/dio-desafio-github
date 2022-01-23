//Retorna o tamanho da string
const textSize = 'texto'.length;
//console.log( `Quantidade de letras: ${textSize}`);

//Retorna um Array quebrando a string por um delimitador
const splittedText = 'Minha boca na suax rola?'.split('x');
//console.log(`\nArray com as posições separadas pelo delimitador: ${splittedText}`);

//Busca por um valor e substitui por outro
const replacedText = 'Eu quero comer porra!!!!'.replace('comer', 'comer,');
//console.log('\nCorrigimos o seu texto pra voce não passar vergonha: ' + replacedText);

//Retorna a 'fatia' de um valor - pense no texto como um array, onde cada letra é um indice.
//param 1: letra de inicio, param 2:letra final
const recortador = 'Texto'.slice(1,3);
//console.log('\nQue saudade da minha ' + recortador)

//Retorna n caracteres a partir de uma posição
//param 1: referencia inicial, param 2: quantidade de letras a partir daquela referencia
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 4)
//console.log(twoCharsBeforeFirstPos)

//Transforma o numero do tipo string pra o tipo number
const numero = '123'
const strumber = Number(numero)
console.log(typeof strumber)