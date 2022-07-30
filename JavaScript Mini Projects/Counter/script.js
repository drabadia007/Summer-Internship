const text = document.querySelector(".text")
const button_box = document.querySelector(".button-box")

console.log(text)
console.log(button_box)
// let count;
let count = 0
button_box.addEventListener("click",(e)=>{
    
    
    if(e.target.classList.contains("decrease")){
        count--;
    }
    else if(e.target.classList.contains("increase")){
        count++;
    }
    if(e.target.classList.contains("reset") || count===0){
        count = 0
        text.textContent = `0`
        text.style.color = "black"
    }
    if(count > 0){
        text.style.color = "green"
    }
    else if(count < 0){
        text.style.color = "red"
    }
    if(count === 0){
        text.style.color = "black"
    }
    text.textContent = count
})
