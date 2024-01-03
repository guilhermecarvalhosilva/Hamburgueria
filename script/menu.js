var menu = document.getElementById(`menu`)
var header = window.document.body


function showMenu(){
    if(menu.classList.contains(`showMenu`)) {
        menu.classList.remove(`showMenu`)
        header.classList.remove(`showBody`)
    } else {
        menu.classList.add(`showMenu`)
        header.classList.add(`showBody`)
    }
}