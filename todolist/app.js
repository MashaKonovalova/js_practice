$(function(){

    let buttonEnter = $(`#enter`);
    let userInput = $(`#userInput`);
    let ul = document.querySelector(`ul`)
    
    function inputLenght(){
         return !!userInput.val() > 0
    }
    
    function createTodo(){
    let li = document.createElement(`li`)
    li.appendChild(document.createTextNode(userInput.val()))
    ul.appendChild(li)
    userInput.val(``)
    
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
    
    buttonEnter.click(function() {
        if(inputLenght()){
             createTodo()
        }
    });
    
    userInput.keypress(changeListAfterKeyPress)
})

