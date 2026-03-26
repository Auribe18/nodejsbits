const { sum } = require('./sum');

function saluda(name){
    console.log(`Saluda, ${name}`);
}

saluda("Angel");
console.log(sum(5, 3));