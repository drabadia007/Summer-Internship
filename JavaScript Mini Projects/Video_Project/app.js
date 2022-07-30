const slide = document.querySelector('.slide')
// console.log(slide)
const btn = document.querySelector('.btn')
// console.log(btn)
const video = document.querySelector('.video-container')

// slide.addEventListener("click",(e)=>{
//     // console.log(e.target)
//     slide.classList.toggle("move-right")
//     slide.classList.toggle("pause")

//     if(slide.classList.contains("pause")){
//         console.log("hello")
//     }
// })

btn.addEventListener("click",(e)=>{
    // console.log(e.target)
    slide.classList.toggle("move-right")
    if(slide.classList.contains("move-right")){
        video.pause()
    }
    else{
        video.play()
    }
})