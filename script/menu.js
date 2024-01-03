var menu = document.getElementById(`menu`)
var header = document.querySelectorAll(`.cabecalho`)[0]



function showMenu(){
    if(menu.classList.contains(`showMenu`)) {
        menu.classList.remove(`showMenu`)
        header.classList.remove(`showHeader`)
    } else {
        menu.classList.add(`showMenu`)
        header.classList.add(`showHeader`)
    }
}