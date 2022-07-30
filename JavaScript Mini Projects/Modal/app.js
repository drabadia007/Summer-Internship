// Select elements 
const modal_btn = document.getElementById("modal-button")
const close_btn = document.getElementById("close-button")
const modal_content = document.querySelector('.modal-bg')
// console.log(modal_btn,close_btn)
// console.log(modal_content,modal_btn,close_btn)

modal_btn.addEventListener("click",(e)=>{
    console.log(e.target)
    modal_content.classList.add("show")
})

close_btn.addEventListener("click",(e)=>{
    // console.log(e.target)
    modal_content.classList.remove("show")
})