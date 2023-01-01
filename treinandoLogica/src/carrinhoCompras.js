
const carrinhoCompras = document.querySelector('.carrinhoCompras')

function criarItemDoCarrinho(element) {
    const liList = document.createElement('li')
    const img = document.createElement('img')
    const price = document.createElement('p')
    const addCard = document.createElement('button')

    liList.classList.add('liList')
    img.src = element.img
    price.innerText = element.price
    addCard.innerText = 'Remover item'
    addCard.addEventListener('click', () => {
        removeDosDadosCarrinho(element.id)
        exibirItemsDoCarrinho();

    })

    liList.append(img, price, addCard)

    return liList
}

criarItemDoCarrinho(produtos)

function exibirItemsDoCarrinho() {
    carrinhoCompras.innerHTML = '';

    dataCarrinhoCompras.forEach(_produto => {
        const novoItem = criarItemDoCarrinho(_produto)
        carrinhoCompras.appendChild(novoItem)
    });
}

