// Select items
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// console.log(alert,form,grocery,submitBtn,container,list,clearBtn)

// edit option
let editElement;
let editFlag = false
let editId = ''

// event listeners
form.addEventListener('submit',addItem)

clearBtn.addEventListener('click',clearItems)

function clearItems(){
    const items = document.querySelectorAll('.grocery-item')

    if(items.length > 0){
        items.forEach((item)=>{
            list.removeChild(item)
        })
    }
    container.classList.remove('show-container')
    displayAlert('empty list','danger')
    setBackToDefault()
    localStorage.removeItem('list')
}

function addItem(e){
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()
    if(value && editFlag === false){
        // console.log('add item')
        const element = document.createElement('article')
        // add class
        element.classList.add('grocery-item')
        const attr = document.createAttribute('data-id')
        attr.value = id

        element.setAttributeNode(attr)
        element.innerHTML=`<p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>`

        const deleteBtn = element.querySelector('.delete-btn')
        const editBtn = element.querySelector('.edit-btn')

        deleteBtn.addEventListener('click',deleteItem)
        editBtn.addEventListener('click',editItem)

        // append child
        list.appendChild(element)
        // display alert
        displayAlert('item added to the list','success')
        // show container
        container.classList.add("show-container")
        // add to local storage
        addToLocalStorage(id,value)
        // setback to default
        setBackToDefault()
    }
    else if(value && editFlag === true){
        // console.log('edit item')
        editElement.innerHTML = grocery.value
        displayAlert('value edited','success')
        // edit local storage
        editLocalStorage(editId,value)
        setBackToDefault()
    }
    else{
       displayAlert('please enter value','danger')
    }
}

// display alert
function displayAlert(text,action){
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    // remove alert
    setTimeout(()=>{
        alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
    },1000)
}

// edit fnc
function editItem(e){
    // console.log('edit item')
    const element = e.currentTarget.parentElement.parentElement
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling 
    // set form value
    grocery.value = editElement.innerHTML
    editFlag = true
    editId = element.dataset.id
    submitBtn.textContent = 'edit'
}
// delete fnc
function deleteItem(e){
    // console.log('delete item')
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    list.removeChild(element)

    if(list.children.length === 0){
        container.classList.remove('show-container')
    }
    displayAlert('item removed','danger')
    setBackToDefault()
    // remove from local storage
    removeFromLocalStorage(id)
}

// set back to default
function setBackToDefault(){
    grocery.value = ''
    editFlag = false
    editId = ''
    submitBtn.textContent = "submit"
}

// local storage
function addToLocalStorage(id,value){
    // console.log('added to local storage')
    const grocery = {id:id,value:value}
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem('list',JSON.stringify(items))
    // console.log(items)
    // console.log(grocery)
}

function getLocalStorage(){
    return localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]
}

function editLocalStorage(id,value){
    let items = getLocalStorage()
    items = items.map((item)=>{
        if(item.id === id){
            item.value = value
        }
        return item
    })
    localStorage.setItem('list',JSON.stringify(items))
}

function removeFromLocalStorage(id){
     let items = getLocalStorage()

     items = items.filter((item)=>{
        if(item.id !== id){
            return item
        }
     })
     localStorage.setItem('list',JSON.stringify(items))
}

// local storage API
// setItem
// getItem
// removetem
// save as strings
// localStorage.setItem('orange',JSON.stringify(['item']))
// const orange = JSON.parse(localStorage.getItem('orange'))
// console.log(orange)
// localStorage.removeItem('orange')
// setup items