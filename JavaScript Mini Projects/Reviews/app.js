// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// select html elements
const image = document.getElementById("person-img")
const pname = document.getElementById("pname")
const job = document.getElementById("job")
const info = document.getElementById("info")

// console.log(image,pname,job,info)

const prev_btn = document.querySelector('.prev')
const next_btn = document.querySelector('.next')
const surprise_btn = document.querySelector('.surprise')

// console.log(prev_btn,next_btn,surprise_btn)

// set initial starting item to 0
let currentItem = 0

// loading initial item into our website as we dont want the hard coded one
window.addEventListener("DOMContentLoaded",function(){
    // console.log("Hello there")
    showPerson(currentItem)
})

function showPerson(person){
    const item = reviews[person]
    image.src = item.img
    pname.innerHTML = item.name
    job.innerHTML = item.job
    info.innerHTML = item.text
}

// Code for Next button
next_btn.addEventListener("click",(e)=>{
    // console.log(e.target)
    currentItem++
    if(currentItem > (reviews.length - 1)){
        currentItem = 0
    }
    showPerson(currentItem)
})

// Code for Prev button
prev_btn.addEventListener("click",(e)=>{
    // console.log(e.target)
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})

// Code for Surprise button
surprise_btn.addEventListener("click",(e)=>{
    // console.log(e.target)
    const random = Math.floor(Math.random() * reviews.length)
    console.log(random)
    showPerson(random)
})