let tag1 = document.querySelector ("h1");
tag1.innerHTML = "Hora do Desafio";
let resposta1;


function cliquesConsole () {
    console.log("O botão foi clicado");
}

function loveJS () {
    alert("Eu amo JS");
}

function botaoPrompt () {
    resposta1 = prompt("Digite o nome de uma cidade do Brasil");
    alert(`Estive em ${resposta1} e lembrei de você.`);
}

let num1 = 0;
let num2 = 0;
let resul1;
function somaDois () {
    num1 = parseInt(prompt ("Digite um número para soma"), 10);
    num2 = parseInt(prompt ("Digite outro número para soma"), 10);
    resul1 = num1 + num2;
    alert(`A resposta da soma entre ${num1} e ${num2} é ${resul1}!`)
}