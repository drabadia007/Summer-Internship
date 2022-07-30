const toggle = document.querySelector('.toggle')
const navbar = document.querySelector('.navbar')
const header = document.querySelector('.header')
if(toggle){
    toggle.addEventListener("click",(e)=>{
        navbar.classList.toggle('show')
        navbar.classList.toggle('show-box-shadow')
        header.classList.toggle('box-shadow')
    })
}