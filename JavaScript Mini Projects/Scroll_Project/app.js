const toggle_btn = document.querySelector('.toggle')
const links = document.querySelector('.links')
toggle_btn.addEventListener("click",(e)=>{
    // console.log(e.target,links)
    links.classList.toggle("show-links")
})


// Fixed Navbar
const navbar = document.querySelector('#nav')
const top_link = document.querySelector('.top-link')

console.log(navbar)

window.addEventListener("scroll",()=>{
    const scroll_height = window.pageYOffset
    // console.log(scroll_height)
    const nav_height = navbar.getBoundingClientRect().height
    // console.log(nav_height)

    if(scroll_height > nav_height){
        navbar.classList.add("fixed-nav")
    }
    else{
        navbar.classList.remove("fixed-nav")
    }

    if(scroll_height>500){
        top_link.classList.add("show-top-link")
    }
    else{
        top_link.classList.remove("show-top-link")
    }
})