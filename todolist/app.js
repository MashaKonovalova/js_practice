let buttonEnter = document.getElementById(`enter`);
let userInput = document.getElementById(`userInput`);
let ul = document.querySelector(`ul`)

function inputLenght(){
return userInput.value.length > 0
}

function createTodo(){
let li = document.createElement(`li`)
li.appendChild(document.createTextNode(userInput.value))
ul.appendChild(li)
userInput.value = ``

let deleteButton = document.createElement(`button`)
deleteButton.appendChild(document.createTextNode(`X`))
deleteButton.addEventListener(`click`,deleteTodoitems)
li.appendChild(deleteButton)

li.onclick = () =>{
li.classList.toggle(`done`)
}

function deleteTodoitems(){
li.classList.add(`delete`)
}
}

function changeListAfterKeyPress(event){
if(inputLenght() && event.which === 13 ){
createTodo()
}

}

buttonEnter.onclick = () =>{
if(inputLenght()){
createTodo()
}
}

userInput.addEventListener('keypress', changeListAfterKeyPress)