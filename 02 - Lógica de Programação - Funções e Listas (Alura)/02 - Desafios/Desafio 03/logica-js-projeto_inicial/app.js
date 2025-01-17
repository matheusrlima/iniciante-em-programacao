let peso = 0.0;
let altura = 0.0;
let valorIMC = 0.0;

function calcularIMC () {
    peso = prompt("Digite seu peso:");
    altura = prompt("Digite sua altura:");
    
    valorIMC = peso / (altura * altura);
    alert(`Seu índice de massa corporal (IMC) é ${valorIMC}`);

}

function fatorial () {
    let valorFatorial = parseInt(prompt("Digite um valor que deseja saber seu fatorial:"));
    let resultFatorial = 1;

    for (let i = valorFatorial; i > 1; i--) {
        resultFatorial *= i;
    }

    alert(`O valor de ${valorFatorial}! é de ${resultFatorial}`);

}

fatorial();
