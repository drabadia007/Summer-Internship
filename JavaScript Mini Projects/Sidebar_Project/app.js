// select toggle & close buttons

const close_btn = document.querySelector('.close')
const toggle = document.querySelector('.toggle')
const container = document.querySelector('.container')

// console.log(toggle,close_btn,container)

toggle.addEventListener("click",(e)=>{
    container.classList.toggle('show')
})

close_btn.addEventListener("click",(e)=>{
    container.classList.toggle('show')
})