// select elements

const questions = document.querySelectorAll(".question-centre")
// console.log(questions)

questions.forEach(function(question){
    // console.log(question)
    const btn = question.querySelector(".qbtns")    
    
    btn.addEventListener("click",(e)=>{
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
    
        question.classList.toggle("show-text")
    })
})