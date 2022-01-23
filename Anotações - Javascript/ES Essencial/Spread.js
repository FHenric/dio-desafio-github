//Spread ...
var partes = ['ombro', 'joelhos'];
var musica = [ 'cabeça', ...partes, 'pes'];

function soma(x,y,z) {
   return x + y + z
}

var numeros = [2, 5, 3]

console.log(soma(...numeros))