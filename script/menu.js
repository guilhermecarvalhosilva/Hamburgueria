const menu = document.getElementById(`menu`) // variavel do elemento menu
const header = document.querySelectorAll(`.cabecalho`)[0] // variavel do header


//função que serve para abrir e fechar o menu da landing page
function showMenu(){
    if(menu.classList.contains(`showMenu`)) {
        menu.classList.remove(`showMenu`)
        header.classList.remove(`showHeader`)
    } else {
        menu.classList.add(`showMenu`)
        header.classList.add(`showHeader`)
    }
}