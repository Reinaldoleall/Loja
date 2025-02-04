document.addEventListener("DOMContentLoaded", () => {
    carregarProdutos(produtos);
});

function carregarProdutos(produtos) {
    const container = document.getElementById("produtos-container");
    const categorias = new Set();

    produtos.forEach(produto => {
        categorias.add(produto.categoria);

        const divProduto = document.createElement("div");
        divProduto.classList.add("produto");

        const img = document.createElement("img");
        img.src = `https://drive.google.com/uc?export=view&id=${produto.imagem}`;
        img.alt = produto.nome;
        img.onload = () => container.appendChild(divProduto);
        img.onerror = () => console.warn(`Imagem não carregada: ${produto.nome}`);

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;

        const preco = document.createElement("p");
        preco.textContent = produto.preco;

        divProduto.appendChild(img);
        divProduto.appendChild(nome);
        divProduto.appendChild(preco);
    });

    carregarCategorias([...categorias]);
}

function carregarCategorias(categorias) {
    const nav = document.getElementById("categorias");
    categorias.forEach(categoria => {
        const li = document.createElement("li");
        li.textContent = categoria;
        li.onclick = () => filtrarCategoria(categoria);
        nav.appendChild(li);
    });
}

function filtrarCategoria(categoria) {
    document.querySelectorAll(".produto").forEach(produto => {
        produto.style.display = produto.querySelector("h3").textContent.includes(categoria) ? "block" : "none";
    });
}
