// let meuNome = "hamilton lopes";
// let profissao = "full stack developer";
// let bool = true;

// meuNome = bool ? meuNome : 'Joao';

// console.log(`Meu nome é ${meuNome} e eu sou ${profissao}`);


const objeto = () =>({ nome: 'Hamilton', prof:'Dev',
testei: function() {
    return nome+" "+prof;
}});

let { nome, prof} = objeto();


console.log(objeto().testei());

console.log(nome, prof);

let array1 = [1,2,5];
let array2 = [3,4];

for(let i = 0; i<array2.length; i++){
    for(let k = 0; k < array1.length; k++){
        if(array1[k] >= array2[i]){
            array1.splice(k, 0, array2[i]);
            break;
        } 
    }
}

console.log(array1);