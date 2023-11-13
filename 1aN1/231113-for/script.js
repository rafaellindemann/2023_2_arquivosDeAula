
let  i

i = 120
while (i < 10){
    console.log('Valor do i: ' + i);
    i++
}

console.log('Acabouts');

for(i = 0; i < 10; i++){
    console.log('Valor do i: ' + i);
}


i = 12000
do{
    console.log('Valor do i: ' + i);
    i++
}while (i < 10);

let idade
do{
    idade = Number(prompt("Digite sua idade:"))
}while(idade < 0 || isNaN(idade));

alert('Idade boa!')