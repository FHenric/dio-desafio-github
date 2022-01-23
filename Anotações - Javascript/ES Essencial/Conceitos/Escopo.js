//Escopo global
var scope = 'global'

//var só vai entender escopo de função e escopo global
//let respeita escopo global

{
    //escopo de bloco
    var bloco = 'bloco'
    // console.log(bloco)
}

var nome = 'maria'

function escopo() {
    //escopo de função
    // esse escopo só cobre as coisas q são colocadas aqui

    //por exemplo
    var nome = 'joão'

    //essa variavel não vai ser definida como joão se eu executar um console.log() fora dessa função, observe:
    return console.log(nome);
}
escopo();

    //agora se eu executar um console.log() aqui fora do escopo eu não recebo 'joão', mas sim 'maria' que foi definido
    //no escopo global
    console.log(nome);

if(true){
    let nome = 'filipe'
}
console.log(nome); //percebe que o 'let nome' não foi lido nesse console? isso por que o let não foge do escopo de bloco
// significa que não vai ter vazamento de memória, caso fosse um var, essa variavel nome = 'leticia' seria lido nesse ultimo console
// experimente modificar esse 'if', troque o let por var...
//viu que agora ele está sendo lido pelo console.log?
