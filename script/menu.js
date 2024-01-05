const menu = document.getElementById(`menu`) // variavel do elemento menu
const header = document.querySelectorAll(`.cabecalho`)[0] // variavel do header
const body = window.document.body


//função que serve para abrir e fechar o menu da landing page
function showMenu(){
    if(menu.classList.contains(`ativo`)) {
        menu.classList.remove(`ativo`)
        header.classList.remove(`ativo`)
        body.classList.remove(`ativo`)
    } else {
        menu.classList.add(`ativo`)
        header.classList.add(`ativo`)
        body.classList.add(`ativo`)
    }
}