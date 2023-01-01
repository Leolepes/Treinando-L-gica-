
const ulLista = document.querySelector('.UlProdutos')

function percorrerListaDadosProdutos(_listaDeProdutos) {

    ulLista.innerHTML = ''
    _listaDeProdutos.forEach(_produto => {

        const listaDeProdutos = montarListaDeProdutos(_produto)
        ulLista.appendChild(listaDeProdutos)
    });
}

percorrerListaDadosProdutos(produtos)

function montarListaDeProdutos(element) {



    const liList = document.createElement('li')
    const img = document.createElement('img')
    const price = document.createElement('p')
    const addCard = document.createElement('button')
    const name = document.createElement('p')

    liList.classList.add('liList')
    img.src = element.img
    price.innerText = element.price
    addCard.innerText = element.addCard
    name.innerText = element.name

    addCard.addEventListener('click', () => {
        if (addCard.innerText == 'Remover') {
            removeDosDadosCarrinho(element.id)
            exibirItemsDoCarrinho();
            addCard.innerText = 'Adicionar'

        } else {

            adicionarAosDadosDoCarrinho(element);
            exibirItemsDoCarrinho();
            addCard.innerText = 'Remover'

        }


    })

    liList.append(img, price, addCard, name)

    return liList
}



let dataCarrinhoCompras = [];

function adicionarAosDadosDoCarrinho(item) {
    dataCarrinhoCompras.push(item);

    localStorage.setItem('@lojaleo:carrinho', JSON.stringify(dataCarrinhoCompras))
}

function removeDosDadosCarrinho(idProduto) {
    dataCarrinhoCompras = dataCarrinhoCompras.filter(item => item.id !== idProduto);

    localStorage.setItem('@lojaleo:carrinho', JSON.stringify(dataCarrinhoCompras))


}