class Animal {
    constructor(patas){
        this.qtdePatas = patas;
    };
};

class Cachorro extends Animal{
    constructor(patas, morde) {
        super(patas);
        this.morde = morde;
    }
}
const pug =  new Cachorro(4, false)

console.log(pug)