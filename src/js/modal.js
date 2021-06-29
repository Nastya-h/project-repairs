var button = document.querySelector('#button')
var modal = document.querySelector('#modal')
button.addEventListener('click', function () {
    modal.classList.add('modal_active')
})
var close = document.querySelector('#close')
close.addEventListener('click', function (){
    modal.classList.remove('modal_active')
})

setInterval(function (){
    modal.classList.remove('modal_active')}, 5000)