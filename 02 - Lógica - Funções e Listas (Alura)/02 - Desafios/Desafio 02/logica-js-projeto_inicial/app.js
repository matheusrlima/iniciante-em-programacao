let mensagem1 = "Olá, mundo!"

function desafio1 () {
    console.log(mensagem1);
}
desafio1()


let mensagem2 = "";
function desafio2 () {
let mensagem2 = prompt("Digite seu nome");
console.log(`Olá, ${mensagem2}!`);
}
desafio2()


let numDouble = 0;
let numDouble2 = 0;
function desafio3 () {
    let numDouble = parseInt(prompt("Digite um número"));
    numDouble2 = numDouble + numDouble
    console.log(`O dobro de ${numDouble}, é ${numDouble2}!`);
    }
    desafio3()


let media1 = 0;
let media2 = 0;
let media3 = 0;
let mediafinal = 0;
function desafio4 (){
    let media1 = parseInt(prompt("Digite um primeiro número para tirar média"));
    let media2 = parseInt(prompt("Digite um segundo número para tirar média"));
    let media3 = parseInt(prompt("Digite um terceiro número para tirar média"));
    mediafinal = (media1 + media2 + media3) / 3;
    console.log(`A média entre os três números é ${mediafinal}`);
}
desafio4()


function desafio5 () {
    let num1 = parseInt(prompt("Digite um primeiro número"));
    let num2 = parseInt(prompt("Digite um segundo número"));

    if (num1 > num2) {
        console.log(`O primeiro número (${num1}) é maior que o segundo número (${num2})!`);
    } else if (num1 < num2) {
            console.log(`O primeiro número (${num1}) é menor que o segundo número (${num2})!`);
    } else {
            console.log(`Os números (${num1}) e (${num2}) são iguais!`);
    }
}
desafio5()


let numMult = 0;
let numMult2 = 0;
function desafio6 () {
    let numMult = parseInt(prompt("Digite um número"));
    numMult2 = numMult * numMult
    console.log(`A multiplicação de ${numMult} por ele mesmo, é ${numMult2}!`);
    }
    desafio6()