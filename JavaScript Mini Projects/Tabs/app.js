const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.text-container') 
const articles = document.querySelectorAll('.content')

// console.log(articles)

about.addEventListener("click",(e)=>{
    const id = e.target.dataset.id

    btns.forEach((btn)=>{
        btn.classList.remove("active")
        e.target.classList.add("active")
    })

    articles.forEach((article)=>{
        article.classList.remove("active")
    })
    const element = document.getElementById(id)
    element.classList.add("active")
})