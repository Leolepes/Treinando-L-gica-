const input = document.querySelector('.inputSearch')


const lupa = document.querySelector('.imgSearch')
lupa.addEventListener('click', () => search())


function search() {

    let valorPesquisa = input.value

    
    const listaFiltrada = filtrarDados(valorPesquisa)


    percorrerListaDadosProdutos(listaFiltrada)


}

function filtrarDados(valorPesquisa){

    const produtosFiltrados =  produtos.filter(produto => produto.name.toLowerCase() == valorPesquisa.toLowerCase())
 
     return produtosFiltrados
 
 
 }
 
