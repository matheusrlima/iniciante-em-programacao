let peso = 0.0;
let altura = 0.0;
let valorIMC = 0.0;

function calcularIMC () {
    peso = prompt("Digite seu peso:");
    altura = prompt("Digite sua altura:");
    
    valorIMC = peso / (altura * altura);
    alert(`Seu índice de massa corporal (IMC) é ${valorIMC}`);

}

calcularIMC();

function fatorial () {
    let valorFatorial = parseInt(prompt("Digite um valor que deseja saber seu fatorial:"));
    let resultFatorial = 1;

    for (let i = valorFatorial; i > 1; i--) {
        resultFatorial *= i;
    }

    alert(`O valor de ${valorFatorial}! é de ${resultFatorial}`);

}

function cambio () {
    let valorReal = prompt("Digite o valor em reais que deseja converter:");
    valorDolar = valorReal / 4.80;
    alert(`O valor de R$${valorReal} reais, é equivalente a $${valorDolar} dólares.`);
}

function tabuada () {
    let valorMulti = parseInt(prompt("Digite um valor para saber sua tabuada de multiplicação:"));
    let multiplicador = 10;
    let resultMultiplicador;

    for(multiplicador; multiplicador >= 1; multiplicador--) {
        resultMultiplicador = valorMulti * multiplicador;
        console.log(`${valorMulti} x ${multiplicador} = ${resultMultiplicador}`);
    }
}
