//Currying é uma forma de reduzir os parametros de uma função, recomendado em funções de multiplos parametros
//onde alguns parametros se repetem com frequencia, logo, temos uma função resumida ao unico parametro que varia na aplicação 

function produto(a) {
    return function(b) {
        return a * b;
    };
}

var multiplicar = produto(2);

console.log(multiplicar(8))