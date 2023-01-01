const modalLojas = document.querySelector('.lojas')
modalLojas.addEventListener('click', () => openModal())

function openModal() {

    const modal = document.createElement('div')
    const conteudoPop = document.createElement('div')
    const buttonClose = document.createElement('buton')
    const input = document.createElement('input')


    buttonClose.innerText = 'X'

    modal.classList.add('modal')

    conteudoPop.classList.add('conteudoPop')

    buttonClose.addEventListener('click', () => closeModal())

    const body = document.querySelector('body')
    modal.append(conteudoPop, buttonClose, input)
    body.append(modal)


}

function closeModal() {

    document.querySelector('.modal').remove()

}