let totalGeral = 0;
limpar();

function adicionar () {
    //recuperar valores: nome do produto, valor unitario e quantidade
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    //calcular o preço, no caso, o subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById("lista-produtos");
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    //atualizar o valor total da compra
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalGeral}`;
    quantidade = document.getElementById("quantidade").value = "";
}

function limpar () {
    totalGeral = 0;
    carrinho = document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
    quantidade = document.getElementById("quantidade").value = "";

}